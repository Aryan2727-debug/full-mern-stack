import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import {Link , useNavigate} from "react-router-dom";
import "../App.css";
import signpic from "../images/signpic.jpg";

function Signup(){

    const navigate = useNavigate();

    const [user , setUser] = useState({
        name : "", email : "", phone : "", work : "", password : "", cpassword : ""
    });

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name] : value});
    };

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, phone, work, password, cpassword} = user;

        const res = await fetch("/register" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Invalid Registration!");
            console.log("Invalid Registration!");
        }else{
            window.alert("Registration Successful!");
            console.log("Registration Successful!");

            navigate("/");
        };
    };

    return(
        <>
            <Navbar/>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>

                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                       <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" value={user.name} onChange={handleInputs}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                       <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" value={user.email} onChange={handleInputs}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                       <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Phone Number" value={user.phone} onChange={handleInputs}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                       <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off" placeholder="Your Profession" value={user.work} onChange={handleInputs}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                       <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" value={user.password} onChange={handleInputs}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                       <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Password" value={user.cpassword} onChange={handleInputs}/>
                                </div>

                                <div className="form-group form-button">
                                   <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData}/>
                                </div>

                            </form>
                        </div>

                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="signpic"></img>
                                </figure>

                                <Link to="/login" className="signup-image-link">I am already Registered</Link>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;