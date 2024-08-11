import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo_1.png';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 flex justify-center bg-opacity-70 backdrop-blur shadow-md transition-all duration-300 border border-gray-300 rounded-lg mx-4 nav-padding smaller-nav animate__animated animate__slideInDown`}>
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img className="navbar-logo" src={logo} alt="Nexus" />
          </Link>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/about" className="navbar-button">About us</Link>
            <Link to="/features" className="navbar-button">Features</Link>
            <Link to="/contact" className="navbar-button">Contact us</Link>
            {user ? (
              <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            ) : (
              <>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
                <Link to="/login" className="navbar-button px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              </>
            )}
          </div>
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden flex flex-col mt-4 bg-opacity-70 backdrop-blur border border-gray-300 rounded-lg p-4">
            <Link to="/about" className="navbar-button mb-2">About us</Link>
            <Link to="/features" className="navbar-button mb-2">Features</Link>
            <Link to="/contact" className="navbar-button mb-2">Contact us</Link>
            {user ? (
              <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            ) : (
              <>
                <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
                <Link to="/login" className="navbar-button mb-2">Login</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
