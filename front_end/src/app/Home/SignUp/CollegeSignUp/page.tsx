'use client'
// pages/signup.js
// pages/Signup.js
// pages/Signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

const page = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');
    const [about, setAbout] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'website':
                setWebsite(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'contact':
                setContact(value);
                break;
            case 'about':
                setAbout(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
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
                .from('College')
                .upsert([
                    {
                        name: name,
                        email,
                        website,
                        address,
                        country,
                        state,
                        city,
                        contact,
                        about,
                        password,

                    },
                ]);

            if (error) {
                console.error('Error creating college:', error);
                return;
            }

            if (data) {
                console.log('College created:', data);
                // Redirect to a success page or perform other actions
                router.push('/Home/Login/CollegeLogin');
            }
        } catch (error) {
            console.error('Error during college creation:', error);
            router.push('/Home/Login/CollegeLogin');
        }
    };

    return (
        <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>College Signup</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>
              College Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={inputStyle}
              value={name}
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
            <label htmlFor="website" style={labelStyle}>
              Website:
            </label>
            <input
              type="text"
              id="website"
              name="website"
              style={inputStyle}
              value={website}
              onChange={handleChange}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="address" style={labelStyle}>
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              style={inputStyle}
              value={address}
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
            <label htmlFor="state" style={labelStyle}>
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              style={inputStyle}
              value={state}
              onChange={handleChange}
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="city" style={labelStyle}>
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              style={inputStyle}
              value={city}
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
            <label htmlFor="confirmPassword" style={labelStyle}>
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              style={inputStyle}
              value={confirmPassword}
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