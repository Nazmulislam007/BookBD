const { default: mongoose } = require("mongoose");

const ReviewsScheme = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  yesVotes: {
    type: [String],
    default: [],
  },
  noVotes: {
    type: [String],
    default: [],
  },
  review: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

module.exports = ReviewsScheme;
