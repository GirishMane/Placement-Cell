const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
  company: { type: String, required: true },
  review: { type: String, required: true }
});

const Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;