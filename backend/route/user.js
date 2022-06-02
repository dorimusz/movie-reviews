const router = require('express').Router();
const UserCtrl = require("../controller/user");
const MovieCtrl = require("../controller/movie");
const auth = require('../middleware/auth');


router.post("/signInWithGoogle", UserCtrl.apiSignInWithGoogle);
router.get('/reviews', [auth.verifyToken], MovieCtrl.apiGetAllReviewedMovies); // get users all reviews
// router.get('/:id/reviews', [auth.verifyToken], MovieCtrl.apiGetAllReviewedMovies); // get users all reviews

module.exports = router;