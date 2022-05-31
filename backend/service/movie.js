const Movie = require("../model/movie");

const saveMovie = async (moviedata) => {
  try {
    const movie = new Movie(moviedata);
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

module.exports = { 
  saveMovie,
  getMoviesByUser
}