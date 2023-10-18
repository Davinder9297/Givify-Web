const express=require('express')
const app=express();
const mongoose =require("mongoose");
// const Hello=require('../models/hello')
const signup=require('../models/signup');
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
app.use(express.json())
// app.get('/signup',async(req,res)=>{
//     let data1= await Hello.find({});
//     console.log(req.ip)
//     res.send(data1)
// })

app.post('/signup',async(req,res)=>{
    console.log(req.body)
    let data=new signup(req.body);
    await data.save();
    res.status(200).send("saved succuessfuly")
})

// app.post('/api/signup',async(req,res)=>{
//     // console.log(req.body)
//     let data=new signup(req.body);
//     await data.save();
//     res.status(200).send({"success":"success"})
// })
// app.post('/api/login',async(req,res)=>{
//     // console.log(req.body)
//     let username=req.body.username;
//     let password=req.body.password;
//         let data=await signup.findOne({username,password})
// if(data){
//     res.status(200).send({"success":"success"})
// }
// else{
//     res.status(401).send({"invaild":"invaild"})
// }
// })
// app.patch('/api/hello/:name',async(req,res)=>{
//     let name=req.params.name
//     // console.log(name)
//     let data=await Hello.findOneAndUpdate({name:name},req.body,{new:true})
//     // console.log(data)
//     res.status(200).send("updated succuessfuly")
// })
// app.delete('/api/hello/:name',async(req,res)=>{
//     let name=req.params.name
//     // console.log(name)
//     let data=await Hello.findOneAndDelete({name})
//     // console.log(data)
//     res.status(200).send("Deleted succuessfuly")
// })
app.listen(8000,()=>{
    console.log("server started")
})