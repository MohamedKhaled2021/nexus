import React, { useState,useEffect } from 'react';
import topImage from '../assets/Home_UP.png';
import Footer from './Footer';
import footerImage from '../assets/img.png';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceID = 'service_wkhe854';
    const templateID = 'template_gunpc0g';
    const userID = 'OB4DEVWx45OrF4qvl';

    emailjs.send(serviceID, templateID, formData,userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true);
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setErrorMessage('Failed to send message, please try again later.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white p-4 animate__animated animate__fadeInUp ">
      <div className="w-full max-w-lg form-outer">
        <div className="text-center mb-8">
          <button className="px-4 py-2 rounded-md text-sm mb-4 section-title-box">Work with Us</button>
          <h2 className="text-5xl font-bold mb-2">Get in Touch</h2>
          <p>We would love to hear from you. Contact us today!</p>
        </div>
        {isSubmitted ? (
          <div className="text-center text-green-500">Thank you! Your message has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name..."
                className="w-full p-3 rounded-md w-input form-field"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email..."
                className="w-full  p-3 rounded-md  w-input form-field"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message..."
                rows="4"
                className="w-full  p-3 rounded-md w-input form-field"
              ></textarea>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button type="submit" className="w-full py-3 rounded-md text-lg font-semibold w-input form-field form-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white p-4 animate__animated animate__fadeInUp ">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg card service-card">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <p className="text-gray-400 mb-2">For any inquiries or assistance, please feel free to reach out to us.</p>
            <a href="mailto:hello@nightpulse.com" className="text-blue-400">hello@nightpulse.com</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg card service-card">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl font-semibold">Phone</h3>
            </div>
            <p className="text-gray-400 mb-2">Give us a call to speak with our friendly team.</p>
            <a href="tel:+15551234567" className="text-blue-400">+1 (555) 123-4567</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg card service-card">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold">Office</h3>
            </div>
            <p className="text-gray-400 mb-2">Visit our office during business hours for a personal consultation.</p>
            <p className="text-blue-400">123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
    useEffect(() => {
        // Ensure the page starts from the top on reload
        window.scrollTo(0, 0);
    }, []);
  return (
<div className="pt-16" style={{ backgroundImage: `url(${topImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>      
    <ContactForm />
      <ContactInfo />
      <Footer backgroundImage={footerImage} />

    </div>
  );
};

export default ContactPage;