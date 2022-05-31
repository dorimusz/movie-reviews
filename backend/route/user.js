const router = require('express').Router();
const UserCtrl = require("../controller/user");
// const auth = require('../middleware/auth')

router.post("/signInWithGoogle", UserCtrl.apiSignInWithGoogle);

module.exports = router;