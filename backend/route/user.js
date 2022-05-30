const router = require('express').Router();
const UserCtrl = require("../controller/user");

router.post("/signInWithGoogle", UserCtrl.apiSignInWithGoogle);

module.exports = router;