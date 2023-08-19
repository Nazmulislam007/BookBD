const Book = require("../models/Books");

const getSingleBook = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const singleBook = await Book.findById({ _id });
    res.status(200).json(singleBook);
  } catch (error) {
    next(error);
  }
};

const searchBooks = async (req, res, next) => {
  try {
    const { q } = req.query;

    await Book.collection.createIndex({
      title: "text",
      subtitle: "text",
      authors: "text",
    });

    const searchedBooks = await Book.find({
      $text: {
        $search: q,
        $caseSensitive: false,
      },
    });

    res.status(200).json({ totalCount: 50, books: searchedBooks });
  } catch (error) {
    next(error);
  }
};

const relatedBooks = async (req, res, next) => {
  try {
    const { _ne, catagory, sub_catagory, _limit } = req.query;

    const filter = { _id: { $ne: _ne } };

    if (catagory || sub_catagory) {
      filter.$or = [
        { categories: { $all: catagory } },
        { subCategories: { $all: sub_catagory } },
      ];
    }

    const related = await Book.find(filter)
      .sort({ publishedDate: 1 })
      .limit(_limit);

    const relatedBooksId = [_ne, ...related.map((elem) => elem._id.toString())];

    const youMayAlsoLike = await Book.find({
      _id: {
        $nin: relatedBooksId,
      },
    });

    res.status(200).json({ related, youMayAlsoLike });
  } catch (error) {
    next(error);
  }
};

const getBooks = async (req, res, next) => {
  try {
    const upto75 = await Book.aggregate([
      {
        $match: {
          $expr: {
            $gte: [
              {
                $subtract: [
                  {
                    $toDouble: "$saleInfo.price",
                  },
                  {
                    $toDouble: "$saleInfo.discountPrice",
                  },
                ],
              },
              {
                $multiply: [
                  {
                    $toDouble: "$saleInfo.price",
                  },
                  0.75,
                ],
              },
            ],
          },
        },
      },
    ]);

    const booksWeLove = await Book.aggregate([
      {
        $sort: {
          "reviews.rating": -1,
        },
      },
      {
        $limit: 9,
      },
    ]);

    const top50Books = await Book.aggregate([
      { $sort: { "saleInfo.totalSales": -1 } },
    ]);
    const scienceFiction = await Book.find({
      categories: "Science Fiction & Fantasy",
    });

    const businessMoney = await Book.find({
      categories: "Business & Money",
    });

    res.status(200).json({
      upto75,
      booksWeLove,
      top50Books,
      scienceFiction,
      businessMoney,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getSingleBook,
  searchBooks,
  relatedBooks,
  getBooks,
};
