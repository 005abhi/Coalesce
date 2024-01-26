"use client"
// pages/page.tsx
// pages/page.tsx
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

interface UserProfile {
  // Define the structure of the user profile here
  company_name: string;
  email: string;
  job_title: string;
  first_name: string;
  last_name: string;
  country: string;
  c_username: string;
}

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  // State to hold the user profile
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    // Fetch user's current profile data
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('Company')
          .select('*')
          .eq('c_username', username)
          .maybeSingle();

        if (error) {
          console.error('Error fetching user profile:', error.message);
        } else {
          setUserProfile(data);
          // Set the state values based on the fetched data
          if (data) {
            setFirstName(data.first_name || '');
            setLastName(data.last_name || '');
            setEmail(data.email || '');
            setCompanyName(data.company_name || '');
            setJobTitle(data.job_title || '');
            setCountry(data.country || '');
          }
        }
      } catch (error : any) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUserProfile();
  }, [username]);

  // Function to handle form submission and update user profile
  const handleUpdateProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('Company')
        .update({
          first_name : firstName,
          last_name : lastName,
          email,
          company_name : companyName,
          job_title : jobTitle,
          country,
        })
        .eq('c_username', username);

      if (error) {
        console.error('Error updating user profile:', error.message);
      } else {
        console.log('User profile updated successfully:', data);
        // Redirect to the user's profile page after updating
        router.push(`/SkillHive/Profile/CompanyProfile?username=${(username)}`);
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
      {/* Add form elements for user input */}
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Company Name:
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </label>
      <br />
      <label>
        Job Title:
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </label>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  </div>
  </Suspense>
  );
};

export default Page;
