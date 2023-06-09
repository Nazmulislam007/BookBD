// external import
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3330;

// internal imports
const bookRouter = require("./router/bookRouter");
const shoppingCartRouter = require("./router/shoppingCartRouter");
const checkoutRouter = require("./router/CheckoutRouter");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

// initialize app
const app = express();

app.locals.existedId = {};

// database setup
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/book-app");
}

main()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

// request parser setup
app.use(
  cors({
    origin: ["https://checkout.stripe.com", "http://localhost:5173"],
    methods: ["GET", "PATCH", "POST", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("cookie-secret"));

// router setup
app.use("/books", bookRouter);
app.use("/shopping-cart", shoppingCartRouter);
app.use("/create-payment-intent", checkoutRouter);

// error handling setup
app.use(notFoundHandler); // 404 error
app.use(errorHandler); // default error

// server setup
app.listen(PORT, () =>
  console.log(`server running on url: http://localhost:${PORT}/books`)
);
