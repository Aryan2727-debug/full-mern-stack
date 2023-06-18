import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "../App.css";

function Home(){

    const [userName , setUserName] = useState("");
    const [show , setShow] = useState(false);

    const userHomePage = async () => {

        try{

            const res = await fetch("/getdata" , {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            const data = await res.json();
            console.log(data);
            setUserName(data.name);
            setShow(true);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
        };

    };

    useEffect(() => {
        userHomePage();
    }, []);

    return(
        <>
            <Navbar/>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userName}</h1>
                    <h2>{ show ? "Great to see you back!" : "This is a MERN Project" }</h2>
                </div>
            </div>
        </>
    );
};

export default Home;