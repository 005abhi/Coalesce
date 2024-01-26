"use client"
// pages/page.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';

// Define a type for the profile object
interface UserProfile {
  name: string;
  email: string;
  contact: string;
  website: string;
  address: string;
  country: string;
  state: string;
  city: string;
  about: string;
}

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  // State to hold the user profile
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // State variables for user input
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [about, setAbout] = useState<string>('');

  useEffect(() => {
    // Fetch user's current profile data
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('College')
          .select('*')
          .eq('name', username)
          .maybeSingle();

        if (error) {
          console.error('Error fetching user profile:', error.message);
        } else {
          setUserProfile(data);
          // Set state variables for user input with current profile data
          setName(data?.name || '');
          setEmail(data?.email || '');
          setContact(data?.contact || '');
          setWebsite(data?.website || '');
          setAddress(data?.address || '');
          setCountry(data?.country || '');
          setState(data?.state || '');
          setCity(data?.city || '');
          setAbout(data?.about || '');
        }
      } catch (error: any) {
        console.error('Error during user profile retrieval:', error.message);
      }
    };

    if (username) {
      fetchUserProfile();
    }
  }, [username]);

  const handleUpdateProfile = async () => {
    try {
      // Update user profile in the 'College' table
      const { data, error } = await supabase
        .from('College')
        .update({
          name,
          email,
          contact,
          website,
          address,
          country,
          state,
          city,
          about,
        })
        .eq('name', username);

      if (error) {
        console.error('Error updating user profile:', error.message);
      } else {
        console.log('User profile updated successfully:', data);
        // Redirect to the user's profile page after updating
        router.push(`/SkillHive/Profile/CollegeProfile?username=${(username)}`);
      }
    } catch (error: any) {
      console.error('Error during user profile update:', error.message);
    }
  };

  return (
    <div>
      <h1>Update Your Profile</h1>
      {userProfile && (
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            Contact:
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </label>

          <label>
            Website:
            <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </label>

          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>

          <label>
            Country:
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
          </label>

          <label>
            State:
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
          </label>

          <label>
            City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>

          <label>
            About:
            <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
          </label>

          <button type="button" onClick={handleUpdateProfile}>
            Update Profile
          </button>
        </form>
      )}
     
    </div>
  );
};

export default Page;
