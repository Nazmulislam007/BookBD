const { authController } = require("../controllers/authController");
const {
  loginUserValidator,
  addUserValidationHandler,
} = require("../middlewares/auth/userValidator");

const router = require("express").Router();

router.post(
  "/",
  loginUserValidator,
  addUserValidationHandler,
  authController().login
);

module.exports = router;
