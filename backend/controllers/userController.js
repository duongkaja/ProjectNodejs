import { syncIndexes } from "mongoose";
import User from "../models/User.js";


// create new user
export const createUser = async (req, res)=>{
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200)
        .json({success:true, 
        message:"successFully created",
        data:savedUser});
    }catch(err){
        res.status(500).json({success:false, message:"failed to created"});
    }
}

// update user
export const updateUser = async (req, res)=>{
    const id = req.params.id;

    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        },{new:true})
        res.status(200).json({
        success:true, 
        message:"successFully updated",
        data:updateUser});
    } catch (error) {  
        res.status(500).json({
        success:false, 
        message:"failed to updated",
    });
    }
};
// delete user
export const deleteUser = async (req, res)=>{
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
        success: true, 
        message: "successFully deleted",
    });
    } catch (error) {  
        res.status(500).json({
        success: false, 
        message: "failed to deteled",
    });
    }
};
// getSingle user
export const getSingleUser = async (req, res)=>{
    const id = req.params.id;

    try {
        const user = await User.findById(id);       
        res.status(200).json({
        success: true, 
        message: "successFully",
        data:user,
    });
    } catch (err) {  
        res.status(404).json({
        success:false, 
        message:"Not found",
    });
    }
};
// getAll user
export const getAllUser = async (req, res)=>{

    try {
        const users = await User.find({})
        res.status(200).json({
            success: true, 
            message: "successFully",
            data: users,
        });
    } catch (error) {  
        res.status(404).json({
            success:false, 
            message:"Not found",
        });
    }
};