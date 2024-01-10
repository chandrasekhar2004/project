import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';
import bgImg from './img1.jpg';
import { useNavigate } from 'react-router-dom'; 
import "./App.css";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handlebutton = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.message);

      if (result.message === 'OTP sent successfully') {
        
        navigate(`/otp?email=${data.Email}`); 
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <section>
      <Navbar />
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>register and enjoy the service</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(handlebutton)}>
            <input type="text" required {...register("Name")} placeholder='Name' />
            <input type="email" required {...register("Email")} placeholder='Email' />
            <input type="password" required {...register("Password")} placeholder='Password' />
            <input type="password" required {...register("Confirmpassword")} placeholder='Confirm Password' />

            {errors.Name?.type === "required" && "Name is required"}
            {errors.Email?.type === "required" && "Email is required"}
            {errors.Email?.type === "maxLength" && "Max Length Exceeded"}
            {errors.Password?.type === "required" && "Password is required"}
            <button className='btn'>Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Form;
