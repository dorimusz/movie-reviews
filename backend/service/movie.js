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
  try {
    const movies = Movie.find({ "reviews.user_id": userId})
    return movies
  } catch (error) {
    console.log(`Could not get movies ${error}`)
  }
}

const saveReview = async (reviewData) => {
  console.log(reviewData)
  const { description, score, user_id, movie_id, movie_title, movie_description } = reviewData;
  const movie = await Movie.find({movie_id:  movie_id })
  if ( movie.length === 0 ) {
    Movie.create({
      movie_id: movie_id,
      title: movie_title,
      description: movie_description,
      reviews: [
        {
          description: description,
          score: score,
          user_id: user_id
        },
      ]
    })
  }
  try {
    const review = await Movie.findOneAndUpdate({movie_id: movie_id}, {
      $push: {
        reviews: {
          description: description,
          score: score,
          user_id: user_id
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