const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const authenticate = require("../middleware/authenticate");

require("../db/conn");

const User = require("../db/models/userSchema");

//defining a new Express Router
const router = new express.Router();

router.use(cookieParser());

router.get("/" , (req,res) => {
    res.send("Home Page");
});

//registration route

router.post("/register" , async (req,res) => {

    const { name , email , phone , work , password , cpassword } = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error : "Please fill all the fields!"});
    };

    try{

        const userExist = await User.findOne({email : email});

        if(userExist){
            return res.status(422).json({error : "Email already exists!"});
        }else if(password != cpassword){
            return res.status(422).json({error : "Passwords are not matching"});
        }else{
            const user = new User({ name , email , phone , work , password , cpassword });

            await user.save();

            res.status(201).json({message : "User Registered Successfully!"});
        };

    }catch(err){
        console.log(err);
    };

});

//login route

router.post("/signin" , async (req,res) => {

    
    try {

        let token;

        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({ error: "please fill the data completely" });
        };

        const userLogin = await User.findOne({ email: email });

        if(userLogin){

            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken" , token , {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials!" });
            }else{
                res.json({ message : "User Sign In Successful!" });
            };

        }else{
            res.status(400).json({ error : "Invalid Credentials!"});
        };

    } catch (error) {
        console.log(error);
    };

});

router.get("/about", authenticate , (req,res) => {
    res.send("About Page");
});

router.get("/logout" , (req,res) => {
    res.clearCookie("jwtoken" , {path : "/"});
    res.status(200).send("User Logged out successfully!");
});

router.get("/getdata" , authenticate , (req,res) => {
    console.log("Hello Contact");
    res.send(req.rootUser);
});

router.post("/contact" , authenticate , async (req,res) => {

    try{
        
        const {name, email, phone, message} = req.body;

        if(!name || !email || !phone || !message){
            return res.json({error : "Please fill the Contact From completely!"});
        };

        const userContact = await User.findOne({_id : req.userID});

        if(userContact){

            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({message : "Message Sent Sucessfully!"});

        };

    }catch(err){
        console.log(err);
    }

});


module.exports = router;