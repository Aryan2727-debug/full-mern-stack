import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Navbar from "./Navbar";

function Logout(){

    // eslint-disable-next-line no-unused-vars
    const {state , dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/logout" , {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res) => {
            dispatch({type : "USER" , payload : false});
            navigate("/login" , {replace : true});

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return(
        <>
            <Navbar/>
            <h1>Logout</h1>
        </>
    );
};

export default Logout;