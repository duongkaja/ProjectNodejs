
import Booking  from "../models/Booking.js";



//create a new Booking
export const createBooking = async(req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save()

        res.status(200).json({success:true,message:"Your tour is booked",data: savedBooking})
    } catch (err) {
        res.status(500).json({success:true,message:"internal error"})
    }
}
//single bookings
export const getBooking = async(req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res.status(200).json({success:true,message:"successful",data: book})

    } catch (err) {
        res.status(404).json({success:true,message:"Not found"})

    }
}
//all bookings
export const getAllBooking = async(req, res) => {
    try {
        const book = await Booking.findById()

        res.status(200).json({success:true,message:"successful",data: book})

    } catch (err) {
        res.status(404).json({success:true,message:"internal server error"})

    }
}