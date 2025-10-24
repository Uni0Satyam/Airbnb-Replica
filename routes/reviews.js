const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isReviewAuthor, validateReview} = require("../middleware.js");

const reviewController =  require("../controller/reviews.js");

// Reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.newReview));


// Reviews delete
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;