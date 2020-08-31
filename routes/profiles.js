const express = require("express");
const router = express.Router();

//Controllers
const {
  profileUpdate,
  profileCreate,
  fetchProfile,
  profileList,
  profileDelete,
  tripCreate,
} = require("../controllers/profileController");

// middleware
// const upload = require("../middleware/storage");

// router.param("tripId", async (req, res, next, tripId) => {
//   const trip = await fetchTrip(tripId, next);

router.param("profileId", async (req, res, next, profileId) => {
  const profile = await fetchProfile(profileId, next);

  if (profile) {
    req.profile = profile;
    next();
  } else {
    const err = new Error("Profile not found");
    err.status = 404;
    next(err);
  }
});

// Profile Update
router.put(
  "/:profileId",
  //   passport.authenticate("jwt", { session: false }),
  //   upload.single("image"),
  profileUpdate
);

module.exports = router;
