const { isSignedIn } = require("../middlewares/auth/userValidator");

const router = require("express").Router();

router.get("/", isSignedIn, (req, res) => {
  try {
    res.status(200).json({
      user: req.user.userId && req.user,
      status: req.user.userId ? true : false,
    });
  } catch (error) {
    next(error);
    res.status(404).json({ msg: "User not loggedIn" });
  }
});

module.exports = router;
