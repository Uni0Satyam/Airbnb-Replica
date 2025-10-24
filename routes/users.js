const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controller/users.js");

router.route("/signup")
    // sign Up page
    .get( userController.signUpPage)
    // User sign UP request
    .post( wrapAsync(userController.signUpRequest));

router.route("/login")
    // Login page
    .get( userController.loginPage)
    // Login page request
    .post( saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),userController.loginRequest );

router.get("/logout", userController.logout)


module.exports = router;