'use client'
// pages/page.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';
import Link from 'next/link';
import Image from "next/image";

// Define a type for the profile object
interface UserProfile {
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
  // Extract the 'username' parameter from the URL
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  // State to hold the user profile
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Fetch user profile based on the 'username' parameter
    const fetchUserProfile = async () => {
      if (username) {
        // Convert ReadonlyURLSearchParams to a regular object
        const paramsObject: Record<string, string> = {};
        searchParams.forEach((value, key) => {
          paramsObject[key] = value;
        });

        const { data, error } = await supabase
          .from('Company')
          .select('*')
          .eq('c_username', paramsObject.username) // Change to the correct field name
          .maybeSingle();

        if (error) {
          console.error('Error fetching user profile:', error.message);
        } else {
          setUserProfile(data as UserProfile | null);
        }
      }
    };

    fetchUserProfile();
  }, [username, searchParams]);

  const pushUpdt = () => {
    if (username) {
      router.push(`/SkillHive/Profile/UpdateCompanyPrf?username=${encodeURIComponent(username)}`);
    }
  };


  const pushToPro = () => {
    if (username) {
        router.push(`/SkillHive/Profile/CompanyProfile?username=${encodeURIComponent(username)}`);
    }
};

const pushToHome = () => {
    if (username) {
        router.push(`/SkillHive/SHCompany?username=${encodeURIComponent(username)}`);
    }
};



  return (

    <main style={{ overflow: "hidden" }}>
      <div className="w-full flex flex-row flex-wrap bg-gray-900 text-white">
        <div className="w-full bg-gray-900 h-screen flex flex-row flex-wrap justify-center text-white">

          {/* FIRST DIV BLOCK */}
                    {/* Navbar */}
                    <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap transition-all duration-300 ease-in-out">
                        <div className="w-full text-right">
                            <button className="p-2 rounded-full focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300 ease-in-out" >
                                <i className="fa fa-bars text-4xl text-gray-600"></i>
                            </button>
                        </div>
                    </div>

                    <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-gray-900 shadow-lg transition-all duration-300 ease-in-out">
                        <div className="p-5 bg-gray-900 sticky top-0">
                            <button onClick={() => { pushToPro(); }}><img
                                className="border-2 border-indigo-600 ring-4 ring-indigo-600 shadow-lg rounded-full transition-transform hover:scale-105 cursor-pointer"
                                src="http://lilithaengineering.co.za/wp-content/uploads/2017/08/person-placeholder.jpg"
                                alt="Profile"
                            /></button>

                            <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
                                <strong>
                                    <button onClick={() => { pushToPro(); }}><i>{username}</i></button>
                                </strong>
                            </div>
                        </div>
                        <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer space-y-4">
                            <a href="#_" className="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                <button onClick={() => { pushToHome(); }}><span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-600">Home</span>
                                </button>
                            </a>

                            <a href="#_" className="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                <button onClick={() => { pushToPro(); }} ><span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-600">My Profile</span>
                                </button>
                            </a>

                        

                            <Link href="/Home" className="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <Link href="/Home"><span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-600">Logout</span></Link>
                            </Link>
                        </div>
                    </div>



          <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased" style={{ backgroundColor: 'dark' }}>
            <div className="flex items-center justify-center h-screen">
              <div className="max-w-screen-md">
                <h1 className="text-3xl font-bold mb-6"><strong>Company Profile</strong></h1>
                {userProfile ? (
                  <div className="space-y-4">
                    <p>
                      <strong>Company Name:</strong> {userProfile.company_name}
                    </p>
                    <p>
                      <strong>Email:</strong> {userProfile.email}
                    </p>
                    <p>
                      <strong>Job Title:</strong> {userProfile.job_title}
                    </p>
                    <p>
                      <strong>First Name:</strong> {userProfile.first_name}
                    </p>
                    <p>
                      <strong>Last Name:</strong> {userProfile.last_name}
                    </p>
                    <p>
                      <strong>Country:</strong> {userProfile.country}
                    </p>
                    <p>
                      <strong>Username:</strong> {userProfile.c_username}
                    </p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>


            {/*footer*/}
            <div className="footer">
              <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <Image
                      src="/Image/logo.png"
                      alt="Logo Alt Text"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />

                    <span className="ml-3 text-xl">Coalesce</span>
                  </a>
                  <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                    © 2024 Coalesce —
                    <a
                      href="https://twitter.com/knyttneve"
                      className="text-gray-500 ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @Team Bots
                    </a>
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-400">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
