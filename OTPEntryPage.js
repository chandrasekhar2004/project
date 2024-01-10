import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

const OTPEntryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [enteredOTP, setEnteredOTP] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailParam = queryParams.get('email');
    setEmail(emailParam || '');
  }, [location.search]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enteredOTP, email }), // Send the entered OTP and email to the server
      });

      const result = await response.json();
      console.log(result);

      if (result.message === 'OTP verified successfully') {
        navigate('/login'); // Redirect to the login page upon successful OTP verification
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Enter Your OTP</h2>
      <p>Email: {email}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        style={styles.input}
        value={enteredOTP}
        onChange={(e) => setEnteredOTP(e.target.value)}
      />
      <button className='search-button' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full height of the viewport
  },
  input: {
    marginTop: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius:'20px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
};

export default OTPEntryPage;
