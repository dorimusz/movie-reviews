const MovieService = require("../service/movie");
const http = require('axios')

const apiGetAllReviewedMovies = async (req, res) => {
   const movies = await MovieService.getMovies(req.body.searchTitle)
   if (movies) {
      res.json(movies);
   } else {
      res.sendStatus(400);
   }   
}    
   
const apiSaveMovie = async (req, res) => {
   req.body.reviews.user_id = req.user_id
   const movie = await MovieService.saveMovie(req.body);
   if (movie) {
      res.sendStatus(201);
   } else {
      res.sendStatus(400);
   }   
}

const apiSaveReview = async (req, res) => {
   if (!req.params.id) return res.sendStatus(400)
   req.body.movie_id = req.params.id
   const review = await MovieService.saveReview(req.body)
   if (review) {
      res.sendStatus(201);
   } else {
      res.sendStatus(400);
   }   
}

module.exports = { 
   apiGetAllReviewedMovies,
   apiSaveMovie,
   apiSaveReview
}