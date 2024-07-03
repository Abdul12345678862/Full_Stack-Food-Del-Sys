import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email: email });
        if (!user){
            return res.json({success:false,message:"User doesn't exist"})
        } 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success:false,message:"Password is incorrect"})
        }
        const token = createToken(user._id);
        res.json({success:true,token:token, message:"Login successful" })
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error" })
    }
}

//create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res) => {
    const {name, email, password} = req.body;
    try {
        //Checking is user is already exist or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"Password must be at least 8 characters long"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        //creating new user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        //saving user to database
        const user = await newUser.save();
        const token = createToken(user._id)
        return res.json({success:true,token:token, message:"User created successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}