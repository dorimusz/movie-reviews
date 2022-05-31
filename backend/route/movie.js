const router = require('express').Router()
const auth = require('../middleware/auth');
const User = require("../model/user");
const MovieCtrl = require("../controller/movie");

router.get('/', MovieCtrl.apiGetAllReviewedMovies); // send all movies
router.post('/', MovieCtrl.apiSaveMovie); // create a movie, send back created id

router.get('/:id', async (req, res) => {
// send one movie identified by id
})  

router.patch('/:id', async (req, res) => {
// modify movie with id
})  

router.delete('/:id', async (req, res) => {
// delete id movie
})

router.get('/:id/reviews', async (req, res) => {
    // send movie all todos from movie identified by id
})

router.post('/:id/reviews', async (req, res) => {
// create a review, send back created todoid
})

router.patch('/:id/reviews/:reviewId', async (req, res) => {
// modify todo identified by reviewId
})

router.delete('/:id/reviews/:reviewId', async (req, res) => {
// delete review identified by reviewId
})

module.exports = router;