const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({path : './config.env'});

require("./db/conn");
const User = require("./db/models/userSchema");

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(require("./router/auth"));

// app.get("/about",  (req,res) => {
//     res.send("About Page");
// });

// app.get("/contact", (req,res) => {
//     res.cookie("Test" , "thapa");
//     res.send("Contact Page");
// });

app.get("/signin", (req,res) => {
    res.send("Login Page");
});

app.get("/signup", (req,res) => {
    res.send("Registration Page");
});


//listening to the server
app.listen(port, () => {
    console.log(`App has started at Port ${port}`);
});