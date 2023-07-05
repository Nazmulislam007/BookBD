const ShoppingCart = require("../models/ShoppingCart");

const shoppingCart = () => {
  return {
    //  get the shopping cart items.
    get: async (req, res, next) => {
      try {
        const cartItems = await ShoppingCart.find();

        res.status(200).json(cartItems);
      } catch (error) {
        next(error);
      }
    },
    post: async (req, res, next) => {
      try {
        const { _id, author, title, price, quantity, img, totalPrice } =
          req.body;

        const addToCart = new ShoppingCart({
          _id,
          author,
          title,
          price,
          img,
          quantity,
          totalPrice,
        });

        const result = await addToCart.save();

        res.status(201).json({
          message: "Successful!",
          data: result,
        });
      } catch (error) {
        next(error);
      }
    },
    update: async (req, res, next) => {
      try {
        const { _id, type, price } = req.body;

        const result = await ShoppingCart.findByIdAndUpdate(
          {
            _id,
          },
          {
            $inc: {
              quantity: type === "incre" ? 1 : -1,
              totalPrice: type === 'incre'? price : -price
            },
            $currentDate: {
              updatedAt: true,
            },
          }
        );

        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    },
    delete: async (req, res, next) => {
      try {
        const { q: _id } = req.query;

        await ShoppingCart.deleteOne({
          _id,
        });

        res.status(202).json({
          message: "Delete successful!",
        });
      } catch (error) {
        next(error);
      }
    },
  };
};

module.exports = shoppingCart;
