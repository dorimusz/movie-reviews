const Movie = require("../model/movie");

const saveMovie = async (movieData) => {
  try {
    const movie = new Movie(movieData);
    const newMovie = await movie.save();  
    return newMovie;
  } catch (error) {
    console.log(`Could not save movie ${error}`)
  }
}

const getMoviesByUser = async (userId) => {
  console.log(userId);
  try {
    const movies = Movie.find({ "reviews.user_id": userId})
    return movies
  } catch (error) {
    console.log(`Could not get movies ${error}`)
  }
}

const saveReview = async (reviewData) => {
  console.log(reviewData)
  const { title, description, score } = reviewData;
  try {
    const review = await Movie.findOneAndUpdate({movie_id: reviewData.movie_id}, {
      $push: {
        reviews: {
          title: title,
          description: description,
          score: score,
        },
      },
    });
    return review;
  } catch (error) {
    console.log(`Could not save review ${error}`);
  }
};

module.exports = { 
  saveMovie,
  getMoviesByUser,
  saveReview
}