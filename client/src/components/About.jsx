import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import aryanpic from "../images/aryan.jpg"; 

const About = () => {

  const navigate = useNavigate();

  const callAboutPage = async () => {

      try{
        
        const res = await fetch("/about" , {
            method : "GET",
            headers : {
              Accept : "application/json",
              "Content-Type" : "application/json"
            },
            credentials : "include"
        });

        const data = await res.json();
        console.log(data);

        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        };

      }catch(err){
        console.log(err);
        navigate("/login");
      };

  };

  useEffect(() => {
    callAboutPage();
  });

  return (
    <>

    <Navbar/>

    <div className="container emp-profile">
      <form method="GET">
        <div className="row">
          <div className="col-md-4">
            <img src={aryanpic} className="pphoto" alt="aryan" />
          </div>

          
          <div className="col-md-6">
          <div className="profile-head">
            <h5>Sushant Singh </h5>
            <h6>Web Developer</h6>
            <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10</span>  </p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" >
    <a className="nav-link active"  id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
  </li>
  <li className="nav-item" >
    <a className="nav-link active"  id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"  aria-selected="false">Timeline</a>
  </li>
</ul>
         
          </div>

          </div>

          <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" value="Edit Profile" name='btnAddMore' />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>SKILLS</p>
               <a href="instagram" target="thapa">instagram link</a><br/>
               <a href="instagram" target="thapa">linkedIn link</a><br/>
               <a href="instagram" target="thapa">facebook link</a><br/>
               <a href="instagram" target="thapa">github link</a><br/>
               <a href="instagram" target="thapa">email link</a><br/>
               <a href="instagram" target="thapa">whatsapp link</a><br/>
            </div>
          </div>
<div className="col-md-8 pl-5 about-info">
  <div className="tab-content profile-tab" id='myTabContent'>
    
    

        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
    
        <div className="row">
      <div className="col-md-6">
        <label >User ID</label>
      </div>
      <div className="col-md-6">
        <p>987654321676</p>
      </div>
      </div>


      <div className="row mt-3">
      <div className="col-md-6">
        <label >Name</label>
      </div>
      <div className="col-md-6">
        <p>Sushant singh</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >Email</label>
      </div>
      <div className="col-md-6">
        <p>sushant.gmail.com</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >Phone</label>
      </div>
      <div className="col-md-6">
        <p>83444322771</p>
      </div>
      </div>

      
      <div className="row mt-3">
      <div className="col-md-6">
        <label >profession</label>
      </div>
      <div className="col-md-6">
        <p>Web developer</p>
      </div>
      </div>


    </div>
    <div className="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile-tab">
     <div className="row">
      <div className="col-md-6">
        <label > Experiance</label>
      </div>
      <div className="col-md-6">
        <p>Expert</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Hourly Rate</label>
      </div>
      <div className="col-md-6">
        <p>10$/hr</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Total Projects</label>
      </div>
      <div className="col-md-6">
        <p>230</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > English Level</label>
      </div>
      <div className="col-md-6">
        <p>Expert</p>
      </div>
     </div>

     <div className="row mt-3">
      <div className="col-md-6">
        <label > Availability</label>
      </div>
      <div className="col-md-6">
        <p>6 Months</p>
      </div>
     </div>

    </div>
    
  </div>
</div>

        </div>
      </form>
    </div> 
    </>
  );
};

export default About;
