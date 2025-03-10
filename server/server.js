const express = require('express')
const mongoose = require ('mongoose')
const dotenv = require('dotenv');
require ('dotenv').config()
const User= require('./src/models/User.js')
const Recipe = require('./src/models/Recipe.js')
const bcrypt=require('bcryptjs')
const cors = require('cors');
const recipeRoutes = require('./src/routes/recipes');
const users = require('./src/routes/users');

const app =  express()
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//Home page api
app.get('/',(req,res)=>{
    res.send("<h1 align=center>Welcome to the MERN stack week2 session</h1>")
})

//Registration page api
app.post('/register',async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({username,email,password:hashedPassword})
        await user.save()
        res.json({message: "User Registered.."})
        console.log("User Registration Completed..")
    }
    catch(err){
        console.log(err)
        res.status(500).json({ message: "Server Error during Registration" });
    }
})


//Login page api
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user = await User.findOne({email});
        if(!user || !(await bcrypt.compare(password,user.password))){
            return res.status(400).json({message: "Invalid Credentials"});
        }
        res.json({message: "Login Successful", username: user.username});
    }
    catch(err){
        console.log(err)
        res.status(500).json({ message: "Server Error during Login" });
    }    
})

app.use('/api/users', users);



app.post('/recipe', async (req, res) => {
    const { by, title, time, type, ingredients, instructions,} = req.body;
    try {
      const recipe = new Recipe({by, title, time, type, ingredients, instructions,});
      await recipe.save();
      res.json({ message: "Recipe added successfully", recipe });
      console.log("Recipe added:", recipe);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error while adding recipe" });
    }
  });

// Use Recipe Routes from `routes/recipes.js`
app.use('/api/recipes', recipeRoutes);



// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error("MongoDB Connection Error:", err));

// Start Server
app.listen(PORT, (err) => {
    if (err) {
        console.error("Server Startup Error:", err);
    }
    console.log(`Server is running on port: ${PORT}`);
});