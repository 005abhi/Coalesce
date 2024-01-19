'use client'
// pages/Login.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

const page = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from('Company')
        .select('id, c_username, password')
        .eq('c_username', name)
        .eq('password', password)
        .maybeSingle();

      console.log(data)


      if (error) {
        console.error('Error fetching college data:', error);
        return;
      }

      if (data) {
        console.log('College data:', data);
        // Redirect to /Home with user ID after successful login
        router.push(`/Home/${data.id}`);
      } else {
        console.log('College not found or password incorrect');
        // Handle invalid credentials
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  }

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>Company Login</h2>
        <br />
        <br />
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="username" style={labelStyle}>
              Company Name :
            </label>
            <input
              type="text"
              id="username"
              name="username"
              style={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={() => (buttonStyle.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={() => (buttonStyle.backgroundColor = '#007bff')}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
