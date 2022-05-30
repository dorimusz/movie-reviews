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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  timestamps: {}
});

const movieSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  reviews: {
    type: [reviewSchema]
  }
})

module.exports = mongoose.model("Movie", movieSchema)

