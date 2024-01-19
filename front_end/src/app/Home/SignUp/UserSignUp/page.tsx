'use client'
// pages/signup.tsx
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
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [about, setAbout] = useState('');

  const handleSignup = async () => {
    // Validate inputs
    if (!username || !fullName || !email || !contact || !gender || !password || !degree || !program || !graduatingYear || !profilePic || !confirmPassword || !about) {
      console.error('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }

    // Insert user details into the User table
    const { data, error } = await supabase
      .from('User')
      .upsert([
        {
          username,
          fname: fullName,
          email,
          contact,
          gender,
          degree,
          program,
          graduating_year: graduatingYear,
          about,
          password,
          // Add other fields as needed
        },
      ]);

    if (error) {
      console.error('Error inserting user details:', error.message);
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
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <input type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
      <input type="text" placeholder="Program" value={program} onChange={(e) => setProgram(e.target.value)} />
      <input type="text" placeholder="Graduating Year" value={graduatingYear} onChange={(e) => setGraduatingYear(e.target.value)} />
      <textarea placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} />
      <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files ? e.target.files[0] : null)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default page;
