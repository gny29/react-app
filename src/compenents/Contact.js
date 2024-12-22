import React from 'react';
import restpizza from './restaupizz3.jpg';
import './Contact.css';
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{background:`url(${restpizza})`}}></div>
      <div className='rightSide'>
     <h1>Contact Us</h1>
     <form id="contact-form" method='POST'>
        <label htmlFor='name'>  Full Name </label>
        <input name='name' placeholder='Enter Full Name...' type="text"/>
        <label htmlFor='email'>Email</label>
        <input name='email' placeholder='Enter Your Email...' type="email"/>
        <label htmlFor='phone'>Phone</label>
        <input name='phone' placeholder='Enter Your Phone...' type="tel"/>
        <label htmlFor='message'>Message</label>
        <textarea rows="6" placeholder='' name='message' required></textarea>
        <button type="submit">Send Message</button>
     </form>
      </div>
    </div>
  )
}

export default Contact
