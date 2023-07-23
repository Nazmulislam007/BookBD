// external import
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoDbStore = require("connect-mongo");
const PORT = process.env.PORT || 3330;

// internal imports
const bookRouter = require("./router/bookRouter");
const shoppingCartRouter = require("./router/shoppingCartRouter");
const checkoutRouter = require("./router/CheckoutRouter");
const registerRouter = require("./router/registerRouter");
const loginRouter = require("./router/loginRouter");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

// initialize app
const app = express();

// database setup
async function main() {
  await mongoose.connect(
    process.env.NODE_ENV === "development"
      ? "mongodb://127.0.0.1:27017/book-app"
      : process.env.MONGDB_URL
  );
}

main()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

// request parser setup
app.use(cookieParser("random-secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    store: MongoDbStore.create({
      client: mongoose.connection.getClient(),
      dbName: "book-app",
      collectionName: "sessions",
    }),
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 2 }, // 2min
  })
);
app.use(
  cors({
    origin: ["https://checkout.stripe.com", "http://localhost:5173"],
    methods: ["GET", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);

// router setup
app.use("/books", bookRouter);
app.use("/shopping-cart", shoppingCartRouter);
app.use("/create-payment-intent", checkoutRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

// error handling setup
app.use(notFoundHandler); // 404 error
app.use(errorHandler); // default error

// server setup
app.listen(PORT, () =>
  console.log(`server running on url: http://localhost:${PORT}/books`)
);
