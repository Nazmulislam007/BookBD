const { isSignedIn } = require("../middlewares/auth/userValidator");

const router = require("express").Router();

router.get("/", isSignedIn, (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    next(error);
    res.status(404).json({ msg: "User not loggedIn" });
  }
});

module.exports = router;
