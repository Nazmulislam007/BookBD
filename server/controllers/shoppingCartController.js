const ShoppingCart = require("../models/ShoppingCart");

const shoppingCart = () => {
  return {
    get: async (req, res, next) => {
      try {
        const cartItems = await ShoppingCart.find();

        res.status(200).json(cartItems);
      } catch (error) {
        next(error);
      }
    },
  };
};

module.exports = shoppingCart;
