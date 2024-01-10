import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { email: urlEmail } = useParams(); // Get the email parameter from the URL
  const [enteredOTP, setEnteredOTP] = useState('');
  const [email, setEmail] = useState(urlEmail);

  useEffect(() => {
    setEmail(urlEmail);
  }, [urlEmail]);
  const handleGenerate = async () => {
    try {
      const response = await fetch('http://localhost:5000/gotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
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
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/forget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enteredOTP, email }),
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
        <button className='search-button' onClick={handleGenerate}>Generate</button>
      <h2>Enter Your OTP</h2>
      <p></p>
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
    height: '100vh',
  },
  input: {
    width: '400px',
    height: '50px',
    marginTop: '30px',
    marginBottom: '100px',
    marginLeft: '40px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '20px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
};

export default ForgetPassword;
