import React from 'react';
import bgImg from './img1.jpg';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';
import "./App.css";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
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

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("Email")} placeholder='email' />
            <input type="password" {...register("Password")} placeholder='password' />
            <input type="password" {...register("confirmpwd")} placeholder='confirm password' />
            <input type="text" {...register("MobileNumber", { required: true, maxLength: 10 })} placeholder='mobile number' />
            {errors.MobileNumber?.type === "required" && "Mobile Number is required"}
            {errors.MobileNumber?.type === "maxLength" && "Max Length Exceed"}
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
