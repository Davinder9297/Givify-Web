const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
const contact = require('./models/contact');
const signup = require('./models/signup');
const gallery = require('./models/gallery');
const requirements = require('./models/requirements');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/signup', async(req, res) => {
    let formdata=req.body;
    let data=new signup(formdata);
    await data.save();
    res.json({ message: 'User registered successfully'}).status(200);



});
app.post('/contact', async(req, res) => {
    let formdata=req.body;
    let data=new contact(formdata);
    await data.save();
    res.json({ message: 'details sent successfully'}).status(200);



});

app.post('/profile', async(req, res) => {
    let {logo,email,phone,state,location,description,children,members}=req.body;
    let username=req.body.username;
    console.log(req.body)
    let data=await signup.findOneAndUpdate({username:username},{logo,email,phone,state,location,description,children,members},{returnNewDocument:true});
    // console.log(data)
    await data.save();
 
    res.json({ message: 'details sent successfully'}).status(200);
});
app.post('/login', async(req, res) => {
    // let formdata=req.body;
    let data=await signup.findOne({$and:[{username:req.body.username},{password:req.body.password}]});
    // await data.save();
    // console.log(data)
    res.json(data).status(200);



});
app.get('/signup', async(req, res) => {

    let data=await signup.find({});
    res.json(data).status(200);


});
app.post('/profiledata', async(req, res) => {
 
    


});
app.post('/singlepage', async(req, res) => {
let id=req.body.id;
// console.log(id)
    let data=await signup.findById({_id:id});
    // console.log(req)
    res.json(data).status(200);


});    

app.get('/gallery', async(req, res) => {

    let data=await gallery.find({});
    res.json(data).status(200);


});
app.post('/gallery', async(req, res) => {

    let data=new gallery(req.body);
    await data.save();
    res.json({ message: 'details sent successfully'}).status(200);


});
app.post('/requirements', async(req, res) => {

    let data=new requirements(req.body);
    await data.save();
    res.json({ message: 'details sent successfully'}).status(200);


});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
