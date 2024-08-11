import React, { useEffect, useRef } from 'react';
import topImage from '../assets/Home_UP.png';
import teamImage1 from '../assets/nour.jpg'; // Replace with actual paths to team images
import teamImage2 from '../assets/nour.jpg'; // Replace with actual paths to team images
import teamImage3 from '../assets/nour.jpg'; // Replace with actual paths to team images
import Footer from './Footer';
import footerImage from '../assets/img.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';

function AboutUs() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });

    cardRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div>
      <div className="pt-16" style={{ backgroundImage: `url(${topImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center text-white">
            <div className="border border-white inline-block px-4 py-2 mb-4 section-title-box">
              About Us
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              A Platform you can Trust
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
              <div className="bg-gray-800 p-4 rounded-md text-center card animate__animated animate__fadeInUp" ref={el => cardRefs.current[0] = el}>
                <h2 className="text-3xl font-extrabold">10M+</h2>
                <p>Downloads</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-md text-center card animate__animated animate__fadeInUp" ref={el => cardRefs.current[1] = el}>
                <h2 className="text-3xl font-extrabold">500M+</h2>
                <p>Generated Revenue</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-md text-center card animate__animated animate__fadeInUp" ref={el => cardRefs.current[2] = el}>
                <h2 className="text-3xl font-extrabold">50M+</h2>
                <p>Products Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white py-12 T_bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center">Meet Our Team</h2>
          <p className="mt-3 mb-8 text-lg text-center">Get to know the talented individuals behind NexFlow</p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-gray-800 p-4 rounded-md card" ref={el => cardRefs.current[3] = el}>
              <img src={teamImage1} alt="John Doe" className="w-full h-auto rounded-md mb-4" />
              <div className="border border-white inline-block px-4 py-2 mb-4 text-left section-title-box">
                CEO
              </div>
              <h3 className="text-xl font-bold text-left">John Doe</h3>
              <p className="text-sm text-left">John is a visionary leader with a passion for driving business growth.</p>
              <div className="flex space-x-2 mt-4 text-left">
                <a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-md card" ref={el => cardRefs.current[4] = el}>
              <img src={teamImage2} alt="Jane Doe" className="w-full h-auto rounded-md mb-4" />
              <div className="border border-white inline-block px-4 py-2 mb-4 text-left section-title-box">
                CTO
              </div>
              <h3 className="text-xl font-bold text-left">Jane Doe</h3>
              <p className="text-sm text-left">Jane is a visionary leader with a passion for driving business growth.</p>
              <div className="flex space-x-2 mt-4 text-left">
                <a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-md card" ref={el => cardRefs.current[5] = el}>
              <img src={teamImage3} alt="Alex Doe" className="w-full h-auto rounded-md mb-4" />
              <div className="border border-white inline-block px-4 py-2 mb-4 text-left section-title-box">
                CFO
              </div>
              <h3 className="text-xl font-bold text-left">Alex Doe</h3>
              <p className="text-sm text-left">Alex is a visionary leader with a passion for driving business growth.</p>
              <div className="flex space-x-2 mt-4 text-left">
                <a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer backgroundImage={footerImage} />
    </div>
  );
}

export default AboutUs;
