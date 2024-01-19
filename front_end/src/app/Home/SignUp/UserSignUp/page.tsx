'use client'
// pages/signup.js
// pages/Signup.js
// pages/Signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

const page = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [degree, setDegree] = useState('');
  const [program, setProgram] = useState('');
  const [graduatingYear, setGraduatingYear] = useState('');
  const [about, setAbout] = useState('');

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
      case 'username':
        setUsername(value);
        break;
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'contact':
        setContact(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'degree':
        setDegree(value);
        break;
      case 'program':
        setProgram(value);
        break;
      case 'graduatingYear':
        setGraduatingYear(value);
        break;
      case 'about':
        setAbout(value);
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
        .from('User')
        .upsert([
          {
            fname : fullName,
            email,
            contact,
            gender,
            degree,
            program,
            graduating_year : graduatingYear,
            about,
            username,
            password,


          },
        ]);

      if (error) {
        console.error('Error creating user:', error);
        return;
      }

      if (data) {
        console.log('User created:', data);
        // Redirect to a success page or perform other actions
        router.push('/success');
      }
    } catch (error) {
      console.error('Error during user creation:', error);
    }
  };

  return( 
    <div style={containerStyle}>
    <div style={formContainerStyle}>
      <h2>User Signup</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="username" style={labelStyle}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            style={inputStyle}
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="fullName" style={labelStyle}>
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            style={inputStyle}
            value={fullName}
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
          <label htmlFor="contact" style={labelStyle}>
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            style={inputStyle}
            value={contact}
            onChange={handleChange}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="gender" style={labelStyle}>
            Gender:
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            style={inputStyle}
            value={gender}
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
          <label htmlFor="degree" style={labelStyle}>
            Degree:
          </label>
          <input
            type="text"
            id="degree"
            name="degree"
            style={inputStyle}
            value={degree}
            onChange={handleChange}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="program" style={labelStyle}>
            Program:
          </label>
          <input
            type="text"
            id="program"
            name="program"
            style={inputStyle}
            value={program}
            onChange={handleChange}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="graduatingYear" style={labelStyle}>
            Graduating Year:
          </label>
          <input
            type="text"
            id="graduatingYear"
            name="graduatingYear"
            style={inputStyle}
            value={graduatingYear}
            onChange={handleChange}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="about" style={labelStyle}>
            About:
          </label>
          <input
            type="text"
            id="about"
            name="about"
            style={inputStyle}
            value={about}
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