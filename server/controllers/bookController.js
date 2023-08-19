const Book = require("../models/Books");

const getSingleBook = async (req, res, next) => {
  try {
    const _id = req.params._id;

    const book = await Book.findById({ _id });

    /**
     * For single book, did average for all review's rating.
     */
    const avg = await Book.aggregate([
      { $unwind: "$reviews" },
      {
        $match: {
          $expr: {
            $eq: ["$_id", { $toObjectId: _id }],
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          avgRating: { $avg: "$reviews.rating" },
        },
      },
    ]);

    const avgRating = avg[0]?.avgRating;

    res.status(200).json({ book, avgRating });
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
    const { _ne, _categories, _sub_categories, _limit } = req.query;

    const filter = { _id: { $ne: _ne } };

    if (_categories?.length > 0 || _sub_categories?.length > 0) {
      filter.$or = [
        { categories: { $in: _categories } },
        { subCategories: { $in: _sub_categories } },
      ];
    }

    let related = await Book.find(filter)
      .sort({ publishedDate: 1 })
      .limit(_limit);

    const relatedBooksId = [_ne, ...related.map((elem) => elem._id.toString())];

    let youMayAlsoLike = await Book.find({
      _id: {
        $nin: relatedBooksId,
      },
      $or: [
        { categories: { $in: _categories } },
        { subCategories: { $in: _sub_categories } },
      ],
    });

    if (related.length <= 0) {
      youMayAlsoLike = await Book.find({
        _id: {
          $nin: relatedBooksId,
        },
      });
    }

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
