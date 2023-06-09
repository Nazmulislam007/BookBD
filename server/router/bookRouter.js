const {
  getSingleBook,
  subjectiveBooks,
  getAllBooks,
  searchBooks,
  relatedBooks,
  upto75perOff,
  getBooksWeLove,
} = require("../controllers/bookController");

const router = require("express").Router();

router.get("/", getAllBooks);
router.get("/search", searchBooks);
router.get("/related-books", relatedBooks);
router.get(`/${encodeURIComponent("upto-75%-off")}`, upto75perOff);
router.get("/subjective-books", subjectiveBooks);
router.get("/books-we-love", getBooksWeLove);

router.get("/:_id", getSingleBook);

module.exports = router;
