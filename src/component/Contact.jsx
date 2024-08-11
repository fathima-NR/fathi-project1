
import React, { useState } from 'react';
import './contact.css';
import Navbar  from '../component/Navbar';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <>
   <Navbar/>
    <div className="row d-flex justify-content-center align-items-center" style={{marginTop:"50px"}}>
    
      <div className="col-sm-6 ">
        <div className="contact-us-form-container">
          <h2 className='fw-bold 'style={{color:'#53bec4'}}>Contact Us</h2>
          {formSubmitted ? (
            <p className="success-message">Thank you for contacting us! We will get back to you shortly.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-us-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          )}
        </div>
      </div>
      <div className="col-sm-4 ms-2">
        <p>We are here to help with any questions or concerns you may have. Please fill out the form below. We will get back to you as soon as possible.</p>
        <p>IFZA Business Park, Dubai<br />
        Digital Park<br />
        DSO – Dubai, UAE</p>
        <p>Phone: +971 55 933 8626</p>
        <p>Email: Info@netraves.com</p>
      </div>
    </div>
    </>
  );
};

export default Contact;
