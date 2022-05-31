const MovieService = require("../service/movie");
const http = require('axios')

const apiGetAllReviewedMovies = async (req, res) => {
   const movies = await MovieService.getMoviesByUser(req.body.user_id)
   if (movies) {
      res.json(movies);
   } else {
      res.sendStatus(400);
   }   
}    
   
const apiSaveMovie = async (req, res) => {
   const movie = await MovieService.saveMovie(req.body);
   if (movie) {
      res.sendStatus(201);
   } else {
      res.sendStatus(400);
   }   
}

module.exports = { 
   apiGetAllReviewedMovies,
   apiSaveMovie
}