const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.newReview = async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "Added new review!");

    res.redirect(`/listings/${req.params.id}`);
};

module.exports.destroyReview = async (req,res) => {
    const {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: (reviewId) } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!")
    
    res.redirect(`/listings/${id}`);
};