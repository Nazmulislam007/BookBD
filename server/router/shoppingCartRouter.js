const shoppingCart = require("../controllers/shoppingCartController");

const router = require("express").Router();

router.get("/", shoppingCart().get);
router.post("/", shoppingCart().post);
router.patch("/", shoppingCart().update);
router.delete("/", shoppingCart().delete);

module.exports = router;
