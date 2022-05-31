const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  score: {
    type: Number
  },
  user_id: {
    type: String,
    required: true
  },
  timestamps: {}
});

const movieSchema = Schema({
  movie_id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  reviews: {
    type: [reviewSchema]
  }
})

module.exports = mongoose.model("Movie", movieSchema)

