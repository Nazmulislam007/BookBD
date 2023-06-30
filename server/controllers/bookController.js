const { Collection } = require("mongoose");
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

    res.status(200).json(searchedBooks);
  } catch (error) {
    next(error);
  }
};

const relatedBooks = async (req, res, next) => {
  try {
    const { _ne, catagory, sub_catagory, _limit } = req.query;

    const related = await Book.find({
      _id: { $ne: _ne },
      $or: [
        { catagories: { $all: catagory } },
        { subCatagory: { $all: sub_catagory } },
      ],
    })
      .sort({ publishedDate: 1 })
      .limit(_limit);

    res.status(200).json(related);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  searchBooks,
  relatedBooks,
};
