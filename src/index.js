const express = require ('express');
const path = require("path");
const bcrypt =  require("bcrypt");
const collection = require("./config"); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (req,res) =>
{  res.render("home");

});

app.get("/index", (req,res) =>
{  res.render("index");

});

app.get("/signup", (req,res) =>
{  res.render("signup");

});

app.post("/signup",async(req, res) => {
    const data =  {
        name: req.body.name,
        password: req.body.password
    }
    const existingUser = await collection.findOne({name: data.name});
    if (existingUser){
        res.send("User already exists. Please choose a different username.");
    }else{
  
    const userdata= await collection.insertMany(data);
    console.log(userdata);
    }
    { res.render("index");
}
    });
    
    app.post("/login", async(req,res ) =>{
    
        try{
    const check = await collection.findOne({name: req.body.name});
    if (!check){
        req.send("wrong password");
    
    }
    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (!isPasswordMatch){
        res.render("home");

    
    }
    
    }catch{
        res.send("wrong details");

    }
    });
    

const port = 3000;
app.listen(port,()=> {
    console.log('Server running on port: $(port)');
})