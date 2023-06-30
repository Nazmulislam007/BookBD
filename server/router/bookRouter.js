const {
  getSingleBook,
  getBooks,
  getAllBooks,
  searchBooks,
  relatedBooks,
} = require("../controllers/bookController");

const router = require("express").Router();

router.get("/", getAllBooks);
router.get("/search", searchBooks);
router.get("/related-books", relatedBooks);

router.get("/:_id", getSingleBook);

module.exports = router;
