'use client'
// pages/signup.js
// pages/Signup.js
// pages/Signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

const page = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [companyUsername, setCompanyUsername] = useState('');

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e6f7ff', // Light shade of blue
  };

  const formContainerStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const formGroupStyle: React.CSSProperties = {
    marginBottom: '15px',
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: '5px',
  };

  const inputStyle: React.CSSProperties = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#0056b3',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'companyName':
        setCompanyName(value);
        break;
      case 'jobTitle':
        setJobTitle(value);
        break;
      case 'country':
        setCountry(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'companyUsername':
        setCompanyUsername(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Use supabase to insert data into the 'Company' table
      const { data, error } = await supabase
        .from('Company')
        .upsert([
          {
            first_name: firstName,
            last_name: lastName,
            email,
            company_name: companyName,
            job_title: jobTitle,
            country,
            password,
            c_username: companyUsername,
          },
        ]);

      if (error) {
        console.error('Error creating company:', error);
        router.push('/Home/Login/CompanyLogin');
        return;
      }

      if (data) {
        console.log('Company created:', data);
        // Redirect to a success page or perform other actions
        router.push('/Home/Login/CompanyLogin');
      }
    } catch (error) {
      console.error('Error during company creation:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>Company Signup</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="firstName" style={labelStyle}>
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              style={inputStyle}
              value={firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="lastName" style={labelStyle}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              style={inputStyle}
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={inputStyle}
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="companyName" style={labelStyle}>
              Company Name:
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              style={inputStyle}
              value={companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="jobTitle" style={labelStyle}>
              Job Title:
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              style={inputStyle}
              value={jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="country" style={labelStyle}>
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              style={inputStyle}
              value={country}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              style={inputStyle}
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="companyUsername" style={labelStyle}>
              Company Username:
            </label>
            <input
              type="text"
              id="companyUsername"
              name="companyUsername"
              style={inputStyle}
              value={companyUsername}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={() => (buttonStyle.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={() => (buttonStyle.backgroundColor = '#007bff')}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;