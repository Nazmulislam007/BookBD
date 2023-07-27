const sessionCart = require("../controllers/cartSessionController");

const router = require("express").Router();

router.get("/", sessionCart().get);
router.put("/", sessionCart().update);
router.delete("/", sessionCart().remove);

module.exports = router;
