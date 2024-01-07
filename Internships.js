// Internships.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

const Internships = () => {
  const navigate = useNavigate();

  // Sample data for internships (you can replace it with your actual data)
  const internshipsData = [
    { id: 1, image: 'https://th.bing.com/th/id/OIP.NsSqsDGE_BeX6YrhW8icsgHaEK?rs=1&pid=ImgDetMain', caption: 'Virtual Internships', details: '/internships/1' },
    { id: 2, image: 'https://legodesk.com/wp-content/uploads/2017/07/Internship-and-student.jpg', caption: 'Unpaid Interships', details: '/internships/2' },
    { id: 3, image: 'https://kkmpr.com/wp-content/uploads/2020/08/internshipexperience_august.jpg', caption: 'Paid Internships', details: '/internships/3' },
    // Add more items as needed
  ];

  const handleInternshipClick = (internshipId) => {
    // Navigate to the detailed view of the selected internship
    navigate(`/internships/${internshipId}`);
  };

  return (
    <div className="internships-container">
      <Navbar />
      <br />
      <h1 className='intern-h1'>Internships</h1>
      <br /><br />
      <br /><br />
      <div className="internships-grid">
        {internshipsData.map((internship) => (
          <div key={internship.id} className="internship-item">
            <img src={internship.image} alt={`Internship ${internship.id}`} />
            <p>{internship.caption}</p>
          </div>
        ))}
      </div>
      {/* New div for the text and dropdown box */}
      <div className="internships-options">
        <p>The available Internships are:</p>
        <select>
          <option value="paid">Paid Internships</option>
          <option value="unpaid">Unpaid Internships</option>
          <option value="virtual">Virtual Internships</option>
          <option value="hands-on">Hands-on Experience Internships</option>
          <option value="employee">Employee Internships</option>
        </select>
      </div>
      <div>
        {/* Corrected the onClick handler */}
        <button className="navigate-button" onClick={() => handleInternshipClick(internshipsData[0].id)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Internships;
