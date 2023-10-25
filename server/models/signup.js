// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/main");
const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const ourschema=new mongoose.Schema({
    organizationname:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    type:{
        type:String
    },
   
});
const signup=new mongoose.model("signup",ourschema)
module.exports=signup;
// export signup;   