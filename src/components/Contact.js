import React from 'react'
import "../styles/Contact.css"
import ThemeContext from '../contexts/ThemeContext'

export default function Contact() {
  const {theme} = React.useContext(ThemeContext);

  const colorP = theme ? 'darkP' : 'lightP';
  const colorM = theme ? 'darkM' : 'lightM';
  const colorT = theme ? '#36454F' : '';
  const colorB = theme ? 'darkB' : 'lightB';


  return (
    <div className='contact'>
      <section id="contact-info">
        <h2><span className={!theme ? 'light' : 'dark'}>Contact Information</span></h2>
        <p className={colorP}>Have a question, comment, or suggestion? We'd love to hear from you!</p>
        <p className={colorP}>You can reach us through the following channels:</p>
        <ul>
          <li className={colorM}>Email: <a className = {colorM} href="mailto:info@cloudbuilder.com">info@cloudbuilder.com</a></li>
          <li className={colorM}>Phone: 9965445699</li>
          <li className={colorM}>Address: 1234 Razor's Apartment, India</li>
        </ul>
      </section>

      <section id="contact-form">
        <h2><span className={!theme ? 'light' : 'dark'}>Contact Form</span></h2>
        <p className={colorP}>Send us a message using the form below:</p>
        <form>
          <div className="form-group">
            <label className={colorM} htmlFor="name">Name:</label>
            <input style={{backgroundColor:colorT}} type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label className={colorM} htmlFor="email">Email:</label>
            <input  style={{backgroundColor:colorT}} type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label className={colorM} htmlFor="message">Message:</label>
            <textarea id="message" style={{backgroundColor:colorT}}name="message" rows="5" required></textarea>
          </div>
          <button className={colorB} type="submit">Send</button>
        </form>
      </section>

        <p className={colorP}>Thank you for reaching out to us. We'll get back to you as soon as possible!</p>
    </div>
  )
}
