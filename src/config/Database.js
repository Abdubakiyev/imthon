import mongoose from "mongoose";
import "dotenv/config"

export const connectDB = async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("Mongodb connect"))
    .catch(error => console.log(error))
}