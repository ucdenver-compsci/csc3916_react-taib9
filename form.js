import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', formData);
      console.log('User signed up successfully', response.data);
      // Handle successful signup, redirect, show a success message, etc.
    } catch (error) {
      console.error('Signup failed', error.response.data);
      // Handle signup error, show an error message, etc.
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <label>Name: <input type="text" name="name" onChange={handleInputChange} /></label>
      <label>Username: <input type="text" name="username" onChange={handleInputChange} /></label>
      <label>Password: <input type="password" name="password" onChange={handleInputChange} /></label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;