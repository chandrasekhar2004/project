import React from "react";
import './App.css';
import NewsLetter from "./NewsLetter";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

  
  // Functional component for the main page
  const HomePage = () => {
    return (
      <div className="background-image">
        <Navbar />
        <div className="content">
          <h1>Welcome to the Portal!</h1>
        </div>
      </div>
    );
  };

// Main App component
const MainPage = () => {

    const navigate = useNavigate();

    const handleInternshipsButtonClick = () => {
      // Navigate to the Internships page
      navigate('/internships');
    };
    const handlescholarships=()=>{
        navigate('/scholarship');
    }
    return (
      <div className="App">
        <HomePage />
        <div className="additional-content">
          <div className="image-container">
            <img src="https://www.rutgers.edu/sites/default/files/styles/16x9_full_default_1x/public/2020-02/lg_DMH20CamdenPBMAClass7056.jpg?h=70bf8e53&itok=7b0GGdcs" alt="" width="600" height="400" />
          </div>
          <div className="info">
            <h1 className="heading-h1">Find Internships</h1>
            <p>Acheive your Dreams.
            </p>
            <p>An internship is the key that can unlock door to your future</p>
            <button className="search-button" onClick={handleInternshipsButtonClick}>Search here</button>
          </div>
        </div>
        <div className="additional-content">
          <div className="info">
            <h1 className="heading-h1">Find Scholarships</h1>
        <p>Scholarships can find little to say about</p>
        <p>The obvious.</p>
        <button className="search-button" onClick={handlescholarships}>Apply Here</button>
          </div>
          <div className="image-container">
            <img src="https://th.bing.com/th/id/OIP._pxSlS3V7sq3AIv_B5LMYgEyDM?rs=1&pid=ImgDetMain" alt="" width="600" height="400" />
          </div>
        </div>
        <section id='contact'>
            <h1 className="heading-h1">Contact Us</h1>
            <br/>
        <br/>
            <NewsLetter/>
        </section>
      </div>
    );
  };

export default MainPage;  