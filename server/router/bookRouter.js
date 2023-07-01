const {
  getSingleBook,
  getBooks,
  getAllBooks,
  searchBooks,
  relatedBooks,
  upto75perOff,
} = require("../controllers/bookController");

const router = require("express").Router();

router.get("/", getAllBooks);
router.get("/search", searchBooks);
router.get("/related-books", relatedBooks);
router.get(`/${encodeURIComponent("upto-75%-off")}`, upto75perOff);

router.get("/:_id", getSingleBook);

module.exports = router;
