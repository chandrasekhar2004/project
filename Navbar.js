import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="https://th.bing.com/th/id/R.85a1cedf5e32235a9e388e82bcd457c2?rik=7cAElY3CkzPhNA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9TR%2f5qo%2f9TR5qogyc.png&ehk=gVSY4tRYvLFiMuQC2vSTrnaXQmVxdFykdTg2OOHjL8w%3d&risl=&pid=ImgRaw&r=0" alt="Graduate Icon" />
      </div>
      <ul>
        <li><Link to="/scholarships">Scholarships and Internships</Link></li>
        <li><Link to="/sports">Sports and Events</Link></li>
        <li><Link to="/">Career Guidance</Link></li>
      </ul>
      <ul className="right-options">
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;