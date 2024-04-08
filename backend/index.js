const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database
mongoose.connect("mongodb+srv://dilip:dilip123@cluster0.po2gl1g.mongodb.net/n-store");

// API

app.get("/",(req,res)=>{
    res.send("Welcome to  N-Store API")
})

app.listen(port,(error) => {
    if(!error){
        console.log("Server running on port "+ port)
    }else{
        console.log("Eorror:"+ error);
    }
})