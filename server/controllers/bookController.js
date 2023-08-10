const Book = require("../models/Books");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

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
        { catagories: { $all: catagory } },
        { subCatagory: { $all: sub_catagory } },
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
      catagories: "Science Fiction & Fantasy",
    });

    res.status(200).json({
      upto75,
      booksWeLove,
      top50Books,
      scienceFiction,
    });
  } catch (error) {
    next(error);
  }
};

const subjectiveBooks = async (req, res, next) => {
  try {
    const { _page, _limit, _type } = req.query;

    // Converting _page and _limit to numbers
    const pageNumber = +_page;
    const limit = +_limit;

    // getting 5 page as maximum;
    const _max5Page = Math.min(pageNumber, 5);
    const skip =
      (_type === "top-50-books" ? _max5Page - 1 : _page - 1) * +_limit;

    let pipeline = [];
    let counterQuery = {};
    let counterLimit = {};

    switch (_type) {
      case "top-50-books": {
        pipeline.push({ $sort: { "saleInfo.totalSales": -1 } });
        counterLimit.limit = 50;
        break;
      }
      case "science-fiction-&-fantasy": {
        const query = {
          $or: [
            { catagories: "Science Fiction & Fantasy" },
            { subCatagory: "Science Fiction" },
          ],
        };
        counterQuery = query;
        counterLimit = {};
        pipeline.push({
          $match: query,
        });
        break;
      }
    }

    if (_page && _limit) {
      pipeline.push({ $skip: skip }, { $limit: limit });
    }

    const books = await Book.aggregate(pipeline);
    const totalCount = await Book.countDocuments(counterQuery, counterLimit);

    res.status(200).json({ totalCount, books });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  searchBooks,
  relatedBooks,
  subjectiveBooks,
  getBooks,
};
