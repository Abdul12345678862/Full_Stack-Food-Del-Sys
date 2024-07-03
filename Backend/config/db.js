import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://abdulhaseeb:87654321@cluster0.t3jpx4q.mongodb.net/food-delivery').then(()=>console.log("DB CONNECTED"));
}