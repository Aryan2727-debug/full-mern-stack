import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Error from "./components/Error";
import { Route , Routes } from "react-router-dom";
import { initialState , reducer } from "./reducer/UseReducer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export const UserContext = createContext();

function App(){

  const [state , dispatch] = useReducer(reducer , initialState);

  return(
    <>

     <UserContext.Provider value={{state , dispatch}}>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="*" element={<Error/>}/>
      </Routes>

     </UserContext.Provider>

    </>
  );
};

export default App;
