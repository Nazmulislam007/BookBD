const sessionCart = require("../controllers/SessionCartController");

const router = require("express").Router();

router.get("/", sessionCart().get);
router.put("/", sessionCart().update);
router.delete("/", sessionCart().remove);

module.exports = router;
