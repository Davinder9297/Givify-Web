const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const ourschema=new mongoose.Schema({

    username:{
        type:String
    },
    description:{
        type:String
    },
    title:{
        type:String
    },
    date:{
        type:String,        
        default:new Date().toDateString()
    },
    
   
});
const requirements=new mongoose.model("requirements",ourschema)
module.exports=requirements;
