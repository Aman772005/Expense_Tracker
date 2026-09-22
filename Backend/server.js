const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Expense Tracker Backend is running");
});


app.listen(5000,()=>{
    console.log("Server is running")
})