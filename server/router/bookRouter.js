const {
  getSingleBook,
  subjectiveBooks,
  getAllBooks,
  searchBooks,
  relatedBooks,
  getBooks,
} = require("../controllers/bookController");
const { isSignedIn } = require("../middlewares/auth/userValidator");

const router = require("express").Router();

router.get("/", isSignedIn, getAllBooks);
router.get("/search", searchBooks);
router.get("/related-books", relatedBooks);
router.get(`/b`, getBooks);
router.get("/subjective-books", subjectiveBooks);

router.get("/:_id", getSingleBook);

module.exports = router;
