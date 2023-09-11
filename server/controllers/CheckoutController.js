const Book = require("../models/Books");
const ShoppingCart = require("../models/ShoppingCart");
const stripe = require("stripe")(process.env.SECRET_KEY);

const checkout = async (req, res, next) => {
  try {
    const { items } = req.body;

    const books = await Book.find({
      _id: { $in: items?.map((item) => item.id) },
    });

    const products = items.map((item) => {
      const product = books.find((book) => item.id === book.id);
      return { ...product._doc, quantity: item.quantity };
    });

    const total = products.reduce(
      (prev, curr) => prev + curr.saleInfo.discountPrice * curr.quantity,
      0
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "USD",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    next(error);
  }
};

const orderConfirmed = async (req, res, next) => {
  try {
    const { items, userId } = req.body;

    const matchedBooks = await Book.find({
      _id: { $in: items?.map((item) => item.id) },
    });

    const products = items.map((item) => {
      const product = matchedBooks.find((book) => item.id === book.id);
      return { ...product._doc, quantity: item.quantity };
    });

    const books = products?.map((book) => ({
      author: book.authors[0],
      userId: userId,
      title: book.title,
      price: book.saleInfo.discountPrice,
      img: book.imageLinks.thumbnail,
      quantity: book.quantity,
      totalPrice: book.saleInfo.discountPrice * book.quantity,
    }));

    const result = await ShoppingCart.insertMany(books);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getOrderedBooks = async (req, res, next) =>{
  try {
    const { userId } = req.query;
    
    const orders = await ShoppingCart.find({userId})

    res.status(200).json({orders})

  } catch (error) {
    next(error)
  }
}

module.exports = {
  checkout,
  orderConfirmed,
  getOrderedBooks
};
