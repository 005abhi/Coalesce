'use client'
// pages/signup.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [about, setAbout] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Validate inputs
      if (!name || !email || !website || !address || !password || !country || !state || !city || !profilePic || !confirmPassword || !about) {
        console.error('Please fill in all fields.');
        return;
      }

      if (password !== confirmPassword) {
        console.error('Passwords do not match.');
        return;
      }

      // Insert college details into the College table
      const { data, error } = await supabase
        .from('College')
        .upsert([
          {
            name,
            email,
            website,
            address,
            country,
            state,
            city,
            contact,
            about,
            password,
            // Add other fields as needed
          },
        ]);

      if (error) {
        console.error('Error inserting college details:', error.message);
        // Handle error
        return;
      }

      // Upload profile picture to Supabase Storage
      if (profilePic) {
        const fileData = await supabase.storage.from('images').upload(`profile-pics/${data[0].id}`, profilePic);

        if (fileData.error) {
          console.error('Error uploading profile picture:', fileData.error.message);
          // Handle error
          return;
        }
      }

      // Navigate to a success page or redirect to the home page
      router.push('/Home/Login/UserLogin');
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-lightBlue-200 to-lightBlue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">College Sign Up</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">College Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Website</label>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Country</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">State</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Contact</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Profile Picture</label>
          <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">About</label>
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 p-2 border w-full" />
        </div>

        <button
          type="submit"
          onClick={handleSignup}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
