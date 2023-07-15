const People = require("../models/People");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const register = new People({
      username,
      email,
      password: hashPassword,
      role: "user",
    });

    await register.save();

    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    res.json({
      username: req.body.username,
      email: req.body.username,
      error: "Something went wrong...!",
    });
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const matchUser = await People.findOne({
      $or: [{ username: email }, { email }],
    });

    if (!matchUser && !matchUser._id)
      return createError("Login failed! Please try again.");

    const isValidedPassword = await bcrypt.compare(
      password,
      matchUser.password
    );

    if (!isValidedPassword)
      return createError("Login failed! Please try again.");

    const userObj = {
      userId: matchUser._id,
      email: matchUser.email,
      username: matchUser.username,
      role: matchUser.role,
    };

    const token = jwt.sign(userObj, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_IN,
    });

    res.cookie(process.env.COOKIE_NAME, token, {
      maxAge: process.env.EXPIRE_IN,
      httpOnly: true,
      signed: true,
    });

    res.status(200).json({
      user: userObj,
    });
  } catch (error) {
    res.json({
      email: req.body.email,
      error: "Login failed! Please try again.",
    });
    next(error);
  }
};

module.exports = {
  register,
  login,
};
