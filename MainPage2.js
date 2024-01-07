import React from 'react';
import './App.css';  // Import the CSS file
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const MainPage2 = () => {
  const navigate = useNavigate();

  // State to store the selected value from the dropdown
  const [selectedValue, setSelectedValue] = React.useState('internships');

  // Function to handle the selection change
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Navigate to the selected option value
    navigate(`/${selectedValue.charAt(0).toUpperCase()+selectedValue.slice(1)}`);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="image-container">
          <img
            src="https://hum.utah.edu/_resources/images/humradio/internships_1.jpg"
            alt="Scholarships and Internships"
            width="700"
            height="400"
          />
        </div>
        <div className="text-content">
          <h1 className='intern-h1'>Scholarships and Internships</h1>
          <p>
            Scholarship is the pursuit of Knowledge,
            While Internships transform that knowledge into real-world impact.
          </p>
        </div>
      </div>
      {/* Additional div for Select your choice */}
      <div className="select-choice">
        <p>Select your choice:</p>
        <select onChange={handleSelectChange} value={selectedValue}>
          <option value="internships">Internships</option>
          <option value="scholarship">Scholarships</option>
        </select>
      </div>
      {/* Button to navigate to the selected option value */}
      <button className="navigate-button" onClick={handleButtonClick}>
        Go to {selectedValue.charAt(0).toUpperCase()+selectedValue.slice(1)}
      </button>
    </div>
  );
};

export default MainPage2;
