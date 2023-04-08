import express from "express";
import {createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour} from "../controllers/tourController.js";
import{ verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();

// create new tour
router.post("/",verifyAdmin, createTour);

// update  tour
router.put("/:id",verifyAdmin, updateTour);

// delete  tour
router.delete("/:id",verifyAdmin, deleteTour);

// get single tour
router.get("/:id", getSingleTour);

// getall tour
router.get("/", getAllTour);

//get tour by sreach
router.get("/search/getTourBySreach", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);
export default router;