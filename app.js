const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('home');
});
app.get("/aboutus",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('aboutus');
});
app.get("/contact",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('contact');
});
app.get("/driverhome",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('driverhome');
});
app.get("/homeuser",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('homeuser');
});
app.get("/hospitals",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('hospitals');
});
app.get("/logindriver",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('logindriver');
});
app.get("/loginpage",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('loginpage');
});
app.get("/signupgrive",(req,res)=>{
  //res.sendFile(__dirname+"/index.html");
  res.render('signupgrive');
});

app.get("/sigup",(req,res)=>{
    //res.sendFile(__dirname+"/index.html");
    res.render('sigup');
});

app.listen(3000,(req,res)=>{
console.log("Server Running");
});