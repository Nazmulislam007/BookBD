const {
  getSingleBook,
  searchBooks,
  relatedBooks,
  getBooks,
} = require("../controllers/bookController");

const router = require("express").Router();

router.get("/search", searchBooks);
router.get("/related-books", relatedBooks);
router.get(`/b`, getBooks);
router.get("/:_id", getSingleBook);

module.exports = router;
