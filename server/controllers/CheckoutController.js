const Book = require("../models/Books");
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
        next(error)
    }
}

module.exports = {
    checkout
}