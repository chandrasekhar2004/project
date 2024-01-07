import React from 'react';
import { useParams } from 'react-router-dom';
import Internships from './Internships';

const InternshipDetails = () => {
  const { internshipId } = useParams();

  // Fetch the internship details based on the internshipId
  // Replace this with your actual data fetching logic
  const internshipDetails = {
    src:'https://www.arlingtontx.com/wp-content/uploads/2020/08/Teens-Internship-AdobeStock_122305723.jpg',
    id: internshipId,
    name: 'Internship Name',
    stipend: '$1000',
    company: 'Example Company',
    // Add more details as needed
  };

  return (
    <div>
        <Internships/>
     <img src={internshipDetails.src} alt='alternate' height='300px' width='500px'/>
      <h2>{internshipDetails.name}</h2>
      <p>Stipend: {internshipDetails.stipend}</p>
      <p>Company: {internshipDetails.company}</p> 
      <h1>Internship</h1>
      
    </div>
  );
};

export default InternshipDetails;
