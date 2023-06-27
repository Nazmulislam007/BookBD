const { getAllBooks } = require("../controllers/bookController");

const router = require("express").Router();

router.get("/", getAllBooks);

module.exports = router;
