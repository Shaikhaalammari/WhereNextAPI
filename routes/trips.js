const express = require("express");
const router = express.Router();
//middleware multer
const upload = require("../middleware/multer");

//Controllers
const {
  tripUpdate,
  tripCreate,
  fetchTrip,
  tripList,
  tripDelete,
} = require("../controllers/tripController");

// REVIEW: remove commented out if you dont need it
// router.param("tripId", async (req, res, next, tripId) => {
//   const trip = await fetchTrip(tripId, next);

router.get("/", tripList);

router.param("tripId", async (req, res, next, tripId) => {
  const trip = await fetchTrip(tripId, next);

  if (trip) {
    req.trip = trip;
    next();
  } else {
    const err = new Error("Trip not found");
    err.status = 404;
    next(err);
  }
});

// REVIEW: Why is create trip repeated? Remove one of them

// create trip
router.post("/:profileId/trips", tripCreate);

// Trip Update
router.put("/:tripId", upload.single("image"), tripUpdate);

// create trip
router.post("/", upload.single("image"), tripCreate);

// delete trip
router.delete("/:tripId", tripDelete);

module.exports = router;
