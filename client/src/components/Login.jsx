import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Navbar from "./Navbar";
import "../App.css";
import {Link , useNavigate} from "react-router-dom";
import { UserContext } from "../App";
import login from "../images/login.jpg";

function Login(){

    // eslint-disable-next-line no-unused-vars
    const {state , dispatch} = useContext(UserContext);


    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const loginUser = async (e) => {
       e.preventDefault();

       const res = await fetch("/signin" , {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            email, password
          })
       });

       const data = res.json();

       if(res.status === 400 || !data){
          window.alert("Invalid Credentials!");
       }else{
          dispatch({type : "USER" , payload : true});
          window.alert("User Login Successful!");
          navigate("/");
       }
    };

    return(
        <>
            <Navbar/>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">

                    <div className="signin-image">
                                <figure>
                                    <img src={login} alt="login"></img>
                                </figure>

                                <Link to="/signup" className="signup-image-link">Create an Account</Link>
                    </div>

                        <div className="signin-form">
                            <h2 className="form-title">Log In</h2>

                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="email">
                                       <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                       <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password"/>
                                </div>

                                <div className="form-group form-button">
                                   <input type="submit" name="signin" id="signin" className="form-submit" onClick={loginUser} value="Log In"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;