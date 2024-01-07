// Header.js
import React from 'react';
import './Header.css';

const Sports = () => {
  return (
    <section className="header">
      <nav>
        <div className="logo-container">
          <a href="/">
            <img src="https://th.bing.com/th/id/OIP.E_lyQc6scjmGXRaxFSDlNAAAAA?rs=1&pid=ImgDetMain" alt="Sports Logo" />
          
          <span className="logo-text">SPORTS THINGS</span></a>
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/collegeside">EVENTS</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">MORE</a></li>
          </ul>
        </div>
      </nav>
      <div className="text-box">
        <h1>SPORTS THINGS</h1>
        <a href="/" className="hero-btn">Visit us to Know more</a>
      </div>
    </section>
  );
};

export default Sports;
