import React from 'react';
import './App.css'; // Import the CSS file
import Navbar from './Navbar';

const Scholarship = () => {
  // Sample data for internships (you can replace it with your actual data)
  const scholarshipsData = [
    { id: 1, image: 'https://th.bing.com/th/id/OIP.qVfYiguFqKWikeyjSGYtkQHaEo?rs=1&pid=ImgDetMain', caption: 'Athletic Scholarships' },
    { id: 2, image: 'https://th.bing.com/th/id/OIP.NsSqsDGE_BeX6YrhW8icsgHaEK?rs=1&pid=ImgDetMain', caption: 'Academic Scholarships' },
    { id: 3, image: 'https://th.bing.com/th/id/OIP.sG5Gl4uU0YT_NZLL4V6IEgHaD4?rs=1&pid=ImgDetMain', caption: 'STEM Scholarships' },
    { id: 4, image: 'https://th.bing.com/th/id/OIP.f6SYg3_gq9XCsBHJc1F4YgHaD7?w=660&h=350&rs=1&pid=ImgDetMain', caption: 'Military Scholarships' },
    // Add more items as needed
  ];

  return (
    <div className="scholarships-container">
      <Navbar />
      <br/>
      <br/>
      <h1>Scholarships</h1>
      <br/>
      <br/>
      <div className="scholarships-grid">
        {scholarshipsData.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-item">
            <img src={scholarship.image} alt={`Scholarship ${scholarship.id}`} />
            <p>{scholarship.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarship;
