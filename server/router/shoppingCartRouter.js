const shoppingCart = require("../controllers/shoppingCartController");

const router = require("express").Router();

router.get("/", shoppingCart().get);

module.exports = router;
