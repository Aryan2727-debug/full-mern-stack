import React from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"
import "../App.css";

function Error(){
    return(
        <>

          <Navbar/>

          <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Sorry! Page Not Found.</h2>
                <p className="mb-5">
                    The page you are looking for might have been removed or it is temporarily unavailable.
                </p>
                <Link to="/">Back to Home Page</Link>
            </div>
          </div>
        </>
    );
};

export default Error;
