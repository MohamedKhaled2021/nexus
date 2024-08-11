import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo_1.png';
import insta from '../assets/insta.png';
import linked from '../assets/linked.png';
import tube from '../assets/tube.png';
import X from '../assets/X.jpeg';

function Footer({ backgroundImage }) {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-8"
      style={{
       /* backgroundImage: `url(${backgroundImage})`,*/
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor:"transparent"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-8 md:space-y-0">
          <div className="">
            <img src={logo} alt="Nexus Logo" className="h-12 w-auto mb-4" />
            <p>Stay up to date on the latest features and releases by joining our newsletter.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 focus:outline-none w-full transparent-form"
              />
              <button type="submit" className="text-white p-2 rounded-sub color-sub">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs">By subscribing, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link> and consent to receive updates from our company.</p>
          </div>
          <div className="">
            <h2 className="text-xl font-bold mb-4">Website</h2>
            <ul>
              <li className="mb-2"><Link to="/features" className="hover:underline">Features</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:underline">About us</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:underline">Contact us</Link></li>
              <li className="mb-2"><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl font-bold mb-4">Follow us</h2>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-center space-x-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" className="w-6 h-6" /></a>
                <span>Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={X} alt="Twitter" className="w-6 h-6" /></a>
                <span>Twitter</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linked} alt="LinkedIn" className="w-6 h-6" /></a>
                <span>LinkedIn</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={tube} alt="YouTube" className="w-6 h-6" /></a>
                <span>YouTube</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-left text-xs">
          <p>&copy; NEXUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default Footer;
