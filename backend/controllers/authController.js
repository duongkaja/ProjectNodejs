import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
//dang ky nguoi dung 
export const register = async (req,res) => {
    try {
        // băm bămbămbămbămbămbămbămbămbămbăm hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })
        await newUser.save()

        res.status(200).json({success:true, message:'successfully created'});

    } catch (error) {
         res.status(500).json({success:false, message:'Failed to created, Try again later'});

    }
};
//dang nhap
export const login = async (req,res) => {

    const email = req.body.email

    try {
      const user = await User.findOne({email})

      if(!user){
        return res.status(404).json({success:false, message:'User not found'})
      }

      const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

      if(!checkCorrectPassword){
        return res.status(401).json({success:false, message:'Incorrect email or password'})
      }
      
      const { password, role, ...rest } = user._doc

      //tao jwt token
      const token = jwt.sign(
        { id: user._id, role: user.role},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"15d"}
      );

      //chon token từ mạng với cookie và gửi về máy 
    res.cookie('accessToken', token, {
        httpOnly: true,
        expires:token.expiresIn,
    }).status(200).json({
        token,
        data:{...rest},
        role,
      })
    } catch (error) {       
        res.status(500).json({success:false, message:'Failed to login'})
    }

};