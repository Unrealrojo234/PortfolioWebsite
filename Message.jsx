import React, { useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import Success from "./src/assets/Success";
import Error from "./src/assets/Error";
import './src/index.css'


const serviceId = import.meta.env.VITE_REACT_API_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_API_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_REACT_API_PUBLIC_KEY;

export default function Message() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          $('#success').css('display','block');
          $('.success').addClass('animate__animated animate__bounce animate__bounceOutUp')
          
        },
        (error) => {
          console.log("FAILED...", error.text);
          $('#error').css('display','block');
          $('.error').addClass('animate__animated animate__bounce animate__bounceOutUp')
        }
      );
    e.target.reset();

  };
  $('.form-control').css('border-color','#00898f' )
  return (
    <div className="container-fluid">
      <h1 className="">Message Me <i className="fa-regular fa-envelope fa-xl" style={{color: "#63E6BE"}}></i></h1>
      <Success/>
      <Error/>
      <form className="" style={{backgroundColor:'#1b1c2c',padding:'10px'}} ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          style={{backgroundColor:'#1b1c2c',color:'whitesmoke',borderColor:'#00898f'}}
          className="form-control"
          required
          placeholder="Name: e.g John Doe"
          type="text"
        />
        <br />
        <input
          name="phone"
          style={{backgroundColor:'#1b1c2c',color:'whitesmoke',borderColor:'#00898f'}}
          type="number"
          className="form-control"
          required
          placeholder="Phone: e.g 07********"
        />
        <br />
        <input
          className="form-control"
          style={{backgroundColor:'#1b1c2c',color:'whitesmoke',borderColor:'#00898f'}}
          name="email"
          type="email"
          placeholder="Email: e.g johndoe@gmail.com"
          required
        />
        <br />
        <textarea
          className="form-control"
          style={{backgroundColor:'#1b1c2c',color:'whitesmoke',borderColor:'#00898f'}}
          name="message"
          type="text"
          placeholder="Compose your message here"
        />
        <br />
        <div className="d-grid">
          <button className="btn btn-outline-success" type="submit" value="send">
            Send <i className="fa-regular fa-paper-plane fa-lg" ></i>
          </button>
        </div>
      </form>
    </div>
  );
}
