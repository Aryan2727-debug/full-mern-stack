import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "../App.css";

function Contact(){
    
    
    const [userData , setUserData] = useState({name:"", email:"", phone:"", message:""});

    const userContact = async () => {

        try{
            
            const res = await fetch("/getdata" , {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json"
                },
            });

            const data = await res.json();
            console.log(data);
            setUserData({...userData , name : data.name, email : data.email, phone : data.phone});

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            };

        }catch(err){
            console.log(err);
        };

    };


    useEffect(() => {
        userContact();
    } , []);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData , [name] : value});
    };

    const contactForm = async (e) => {
        e.preventDefault();

        const {name , email , phone , message} = userData;

        const res = await fetch("contact" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();

        if(!data){
            console.log("Message not sent!");
        }else{
            alert("Message sent successfully!");
            setUserData({...userData , message : ""});
        }
    };

    return(
        <>
            <Navbar/>
            
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">

                            {/* phone number */}

                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                              <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                              <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone
                                </div>
                                <div className="contact_info_text">
                                    +91 9915432562
                                </div>
                              </div>
                            </div>

                            {/* email */}

                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                              <img src="https://img.icons8.com/office/24/000000/email.png" alt="email"/>
                              <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="contact_info_text">
                                    shouriearyandev@gmail.com
                                </div>
                              </div>
                            </div>

                            {/* address */}

                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                              <img src="https://img.icons8.com/office/24/000000/address.png" alt="address"/>
                              <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Address
                                </div>
                                <div className="contact_info_text">
                                    Dhakoli, Zirakpur
                                </div>
                              </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* contact us form */}

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in Touch
                                    <form method="POST" id="contact_form">

                                        <div className="contact_form_name d-flex justify-content-between align-items-between">

                                           <input style={{fontSize : "20px"}} type="text" id="contact_form_name" className="contact_form_name input_field" name="name" placeholder="Your Name" required value={userData.name} onChange={handleInputs}/>
                                        

                                           <input style={{fontSize : "20px"}} type="email" id="contact_form_email" className="contact_form_email input_field" name="email" placeholder="Your Email" required value={userData.email} onChange={handleInputs}/>
                                        
                                         
                                           <input style={{fontSize : "20px"}} type="number" id="contact_form_phone" className="contact_form_phone input_field" name="phone" placeholder="Your Phone Number" required value={userData.phone} onChange={handleInputs}/>
                                        
                                        </div>

                                        <div className="contact_form_text mt-5">
                                            <textarea style={{fontSize : "20px"}} className="text_field contact_form_message" name="message" placeholder="Message" cols="30" rows="10" value={userData.message} onChange={handleInputs}></textarea>
                                        </div>

                                        <div className="contact_form_button">
                                            <button onClick={contactForm} type="submit" className="button contact_submit_button">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;