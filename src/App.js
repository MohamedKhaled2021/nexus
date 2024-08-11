import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs'; // Import the About Us component
import BRDForm from './components/BRDGenerator'; // Import the About Us component

import 'animate.css';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/user', {
        headers: { 'x-auth-token': token }
      })
        .then(res => setUser(res.data))
        .catch(err => console.error(err));
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <Navbar user={user} setUser={setUser} />
        <div className="container mx-auto px-4 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
            <Route path="/brd" element={<BRDForm />} /> {/* Add About Us route */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
