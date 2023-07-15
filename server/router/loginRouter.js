const { login } = require("../controllers/registerController");

const router = require("express").Router();

router.post("/", login);

module.exports = router;
