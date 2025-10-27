const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controller/listings.js");

router.route("/")
    .get(wrapAsync(listingController.index))
    // CREATE ROUTE
    .post(isLoggedIn, upload.single("listing[img]"), validateListing, wrapAsync(listingController.createListing));

// NEW 
router.get("/new", isLoggedIn, listingController.new);

// Edit get route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditPage));

router.route("/:id")
    // show route
    .get(wrapAsync(listingController.show))
    // Edit put route
    .put(isLoggedIn, isOwner, upload.single("listing[img]"), validateListing, wrapAsync(listingController.edit))
    // DELETE
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.delete))


module.exports = router;