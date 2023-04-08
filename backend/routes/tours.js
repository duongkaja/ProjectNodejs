import express from "express";
import {createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour} from "../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/", createTour);

// update  tour
router.put("/:id", updateTour);

// delete  tour
router.delete("/:id", deleteTour);

// get single tour
router.get("/:id", getSingleTour);

// getall tour
router.get("/", getAllTour);

//get tour by sreach
router.get("/search/getTourBySreach", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);
export default router;