import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container-fluid">
      <h1>Message Me</h1>
      <form className="form-control" ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          className="form-control"
          required
          placeholder="Name: e.g John Doe"
          type="text"
        />
        <br />
        <input
          name="phone"
          type="number"
          className="form-control"
          required
          placeholder="Phone: e.g 07********"
        />
        <br />
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="Email: e.g johndoe@gmail.com"
          required
        />
        <br />
        <textarea
          className="form-control"
          name="message"
          type="text"
          placeholder="Compose your message here"
        />
        <br />
        <div className="d-grid">
          <button className="btn btn-success" type="submit" value="send">
            Send <i className="fa-regular fa-paper-plane fa-lg" style={{color: "#ffffff"}}></i>
          </button>
        </div>
      </form>
    </div>
  );
}
