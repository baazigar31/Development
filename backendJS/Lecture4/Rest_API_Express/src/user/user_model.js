import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

exports const User=mongoose.model('user',userSchema);