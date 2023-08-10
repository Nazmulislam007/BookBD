const {
  getSingleBook,
  subjectiveBooks,
  getFilterInfo,
  searchBooks,
  relatedBooks,
  getBooks,
} = require("../controllers/bookController");

const router = require("express").Router();

router.get("/filter-info", getFilterInfo);
router.get("/search", searchBooks);
router.get("/related-books", relatedBooks);
router.get(`/b`, getBooks);
router.get("/subjective-books", subjectiveBooks);
router.get("/:_id", getSingleBook);

module.exports = router;
