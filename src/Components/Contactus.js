/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../Components/css/theme.css';
import '../Components/css/maincons.css';
import '../Components/css/bootstrap.css';
import { db } from '../firebase';

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contact")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Successfully Submitted");
      }).catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <main>
        <div class="page-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 py-3">
                <h2 class="title-section">Get in Touch</h2>
                <div class="divider"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Laborum ratione autem quidem veritatis!</p>

                <ul class="contact-list">
                  <li>
                    <div class="icon"><span class="mai-map"></span></div>
                    <div class="content">123 Fake Street, New York, USA</div>
                  </li>
                  <li>
                    <div class="icon"><span class="mai-mail"></span></div>
                    <div class="content"><a href="#">info@digigram.com</a></div>
                  </li>
                  <li>
                    <div class="icon"><span class="mai-phone-portrait"></span></div>
                    <div class="content"><a href="#">+00 1122 3344 55</a></div>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 py-3">
                <div class="subhead">Contact Us</div>
                <h2 class="title-section">Drop Us a Line</h2>
                <div class="divider"></div>

                <form onSubmit={handleSubmit}>
                  <div class="py-2">
                    <input type="text" class="form-control" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div class="py-2">
                    <input type="text" class="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div class="py-2">
                    <textarea rows="6" class="form-control" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary rounded-pill mt-4">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contactus