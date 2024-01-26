"use client"
// pages/page.tsx
// pages/page.tsx
// pages/page.tsx
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

interface UserProfile {
  // Define the structure of the user profile here
  fname: string;
    email: string;
    contact: string;
    gender: string;
    degree: string;
    program: string;
    graduating_year: string;
    about: string;
}

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const usrname = searchParams.get('username');

  // State to hold the user profile
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

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

  useEffect(() => {
    // Fetch user's current profile data
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('User')
          .select('*')
          .eq('username', usrname)
          .maybeSingle();

        if (error) {
          console.error('Error fetching user profile:', error.message);
        } else {
          setUserProfile(data);
          // Set the state values based on the fetched data
          if (data) {
            setUsername(data.username || '');
            setFullName(data.fname || '');
            setEmail(data.email || '');
            setContact(data.contact || '');
            setGender(data.gender || '');
            setPassword(data.password || '');
            setDegree(data.degree || '');
            setProgram(data.program || '');
            setGraduatingYear(data.graduating_year || '');
            setAbout(data.about || '');
          }
        }
      } catch (error : any) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUserProfile();
  }, [usrname]);

  // Function to handle form submission and update user profile
  const handleUpdateProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('User')
        .update({
          fname : fullName,
          email,
          contact,
          gender,
          password,
          degree,
          program,
          graduating_year : graduatingYear,
          about,
        })
        .eq('username', usrname);

      if (error) {
        console.error('Error updating user profile:', error.message);
      } else {
        console.log('User profile updated successfully:', data);
        // Redirect to the user's profile page after updating
        router.push(`/SkillHive/Profile/UserProfile?username=${(usrname)}`);
      }
    } catch (error : any) {
      console.error('Error updating user profile:', error.message);
    }
  };

  return (
    <Suspense>
    <div>
    <h1>Edit Profile</h1>
    <form onSubmit={(e) => { e.preventDefault(); handleUpdateProfile(); }}>
      <label>
        Username:
        <input type="text" value={username} disabled />
      </label>
      <br />
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Contact:
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <br />
      <label>
        Degree:
        <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
      </label>
      <br />
      <label>
        Program:
        <input type="text" value={program} onChange={(e) => setProgram(e.target.value)} />
      </label>
      <br />
      <label>
        Graduating Year:
        <input type="text" value={graduatingYear} onChange={(e) => setGraduatingYear(e.target.value)} />
      </label>
      <br />
      <label>
        About:
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
      </label>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  </div>
  </Suspense>
  );
};

export default Page;
