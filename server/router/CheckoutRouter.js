const { checkout } = require("../controllers/CheckoutController");
const Book = require("../models/Books");

const router = require("express")();

router.post("/", checkout);

module.exports = router;
