import { Schema, model } from "mongoose";

export const userModel = model("User",new Schema({
    username:String,
    branch:String,
    password:String,
    r_password:String,
    birthDate:String,
    gender:String,
    role: {type:String,default:"user"}

}))