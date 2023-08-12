const filteredContent = require("../controllers/filteredContentController");

const router = require("express").Router();

router.get("/subjective-books", filteredContent().getFilteredBooks);

module.exports = router;
