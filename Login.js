import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    // Navigate to the /forget route with the email parameter
    navigate(`/forgot/${email}`);
    //navigate('/forget');
  };
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data.message);
        navigate('/scholarships');
      } else {
        console.error('Login failed:', data.message);
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div>
      <Navbar />
      <CenterWrapper>
        <FormWrapper>
          <h1>Login</h1>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <InputBox>
            <FaUser className='icon' />
            <input
              type='text'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <FaLock className='icon' />
            <input
              type='password'
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          
          <RememberForgot>
            <label>
              <input type='checkbox' />Remember me
            </label>
            <a href={`/forgot/${email}`} onClick={handleForgotPassword} style={{ color: 'black' }}>
  Forgot password?
</a>

          </RememberForgot>
          
          <LoginButton onClick={handleLogin}>Login</LoginButton>
          <RegisterLink>
            <p>
              Don't have an account? <a href='/register'>Register</a>
            </p>
          </RegisterLink>
        </FormWrapper>
      </CenterWrapper>
    </div>
  );
};

export default Login;

// ... (styled components remain unchanged)

const ErrorMessage = styled.div`
  color: red;
  font-size:18px;
  margin: 15px;
`;


const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

const FormWrapper = styled.div`
margin-top:150px;
  width: 400px;
  height:500px;
  background: white;
  color: black;
  border:2px solid black;
  border-radius: 10px;
  padding: 30px 40px;
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
  margin: 15px 30px 5px 5px;
  input {
    placeholder {
        color:black;
    }
    width: 100%;
    height: 50px;
    background: transparent;
    border: 2px solid black;
    border-radius: 30px;
    outline: none;
    padding: 0 20px;
    font-size: 16px;
    color: black;
  }
  .icon {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
`;

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin: 25px 15px 15px 20px;
`;

const LoginButton = styled.button`
  width: 400px;
  height: 50px;
  background: #000;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, -1);
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin: 15px;
  margin-top:50px;
`;

const RegisterLink = styled.div`
  font-size: 10px;
  text-align: center;
  margin: 40px 0px 2px 15px;

  p a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
  }

  p a:hover {
    text-decoration: underline;
  }
`;
