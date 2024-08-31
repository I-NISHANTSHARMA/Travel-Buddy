 import express from 'express'
// import {createTour, updateTour} from "./../controllers/tourController.js";
// import {createTour , deleteTour, getAllTour, getSingleTour,updateTour,getTourBySearch, getFeaturedTour , getTourCount} from "./../controllers/tourController.js";
import {createTour , deleteTour, getSingleTour,updateTour,getAllTour,getTourBySearch, getFeaturedTour , getTourCount} from "./../controllers/tourController.js";
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();
// create new Tour
router.post("/",verifyAdmin, createTour);
// router.post("/", createTour);
//update Tour
router.put("/:id", verifyAdmin, updateTour);
//  router.put("/:id", updateTour);
// // // delete Tour
router.delete(":id", verifyAdmin, deleteTour);
// router.delete("/:id", deleteTour);
// // // get single Tour
router.get("/:id", getSingleTour);
// router.get("/:id", getSingleTour);
// // // get all Tour
router.get("/", getAllTour);

// // // get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;