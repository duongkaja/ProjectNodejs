
import { syncIndexes } from "mongoose";
import Tour from "../models/Tour.js";


// create new tour
export const createTour = async (req, res)=>{
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save()
        res.status(200)
        .json({success:true, 
        message:"successFully created",
        data:savedTour});
    }catch(err){
        res.status(500).json({success:false, message:"failed to created"});
    }
}

// update tour
export const updateTour = async (req, res)=>{
    const id = req.params.id

    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        },{new:true})
        res.status(200).json({
        success:true, 
        message:"successFully updated",
        data:updateTour});
    } catch (error) {  
        res.status(500).json({
        success:false, 
        message:"failed to updated",
    });
    }
};
// delete tour
export const deleteTour = async (req, res)=>{
    const id = req.params.id

    try {
        await Tour.findByIdAndDelete(id);
        
        res.status(200).json({
        success:true, 
        message:"successFully deleted",
    });
    } catch (error) {  
        res.status(500).json({
        success:false, 
        message:"failed to deteled",
    });
    }
};
// getSingle tour
export const getSingleTour = async (req, res)=>{
    try {
    } catch (error) {  
    }
};
// getAll tour
export const getAllTour = async (req, res)=>{
    try {
    } catch (error) {  
    }
};
