import express from "express";
import {createTour, deleteTour, getAllTour, getSingleTour, updateTour} from "./../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/", createTour);

// update  tour
router.put("/:id", updateTour);

// delete  tour
router.delete("/:id", deleteTour);

// get single tour
router.post("/:id", getSingleTour);


// getall tour
router.post("/:id", getAllTour);

export default router;