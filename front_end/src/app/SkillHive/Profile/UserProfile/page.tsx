'use client'
// pages/page.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';


// Define a type for the profile object
interface UserProfile {
  fname: string;
  email: string;
  contact: string;
  gender: string;
  degree: string;
  program: string;
  graduating_year: number;
  about: string;
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
          .from('User')
          .select('*')
          .eq('username', paramsObject.username) // Change to the correct field name
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
      router.push(`/SkillHive/Profile/UpdateUserPrf?username=${encodeURIComponent(username)}`);
    }
  }

  const pushToPostP = () => {
    if (username) {
      router.push(`/SkillHive/PostProject?username=${encodeURIComponent(username)}`);
    }
  };
  
const pushToPro = () => {
    if (username) {
        router.push(`/SkillHive/Profile/UserProfile?username=${encodeURIComponent(username)}`);
    }
};

const pushToHome = () => {
    if (username) {
        router.push(`/SkillHive?username=${encodeURIComponent(username)}`);
    }
};

const pushToMyPrj = () => {
    if (username) {
        router.push(`/SkillHive/MyProjects?username=${encodeURIComponent(username)}`);
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

                            <a href="#_" className="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                <button onClick={() => { pushToPostP(); }} ><span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
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
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-600">Add Projects</span>
                                </button>
                            </a>

                            <a href="#_" className="relative inline-flex items-center justify-start py-4 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-indigo-600 group">
                                <button onClick={() => { pushToMyPrj(); }} ><span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
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
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-600">My Projects</span>
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

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 pl-4 dark:bg-gray-900 text-white w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased"
          >
            <div className="flex items-center justify-center h-screen">
              <div className="max-w-screen-md">
                <h1 className="text-3xl font-bold mb-6">
                  <strong>User Profile</strong>
                </h1>
                {userProfile ? (
                  <div className="mb-8 pl-4">
                    <p className="mb-4">
                      <strong>Name:</strong> {userProfile.fname}
                    </p>
                    <p className="mb-4">
                      <strong>Email:</strong> {userProfile.email}
                    </p>
                    <p className="mb-4">
                      <strong>Contact:</strong> {userProfile.contact}
                    </p>
                    <p className="mb-4">
                      <strong>Gender:</strong> {userProfile.gender}
                    </p>

                    {/* Education Section with Light Blue Background */}
                    <motion.div
                      initial={{ backgroundColor: 'dark', padding: '20px', margin: '20px 0', opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mb-8"
                    >
                      <p className="mb-4 ">
                        <strong>Degree:</strong> {userProfile.degree}
                      </p>
                      <p className="mb-4 ">
                        <strong>Program:</strong> {userProfile.program}
                      </p>
                      <p className="mb-4 ">
                        <strong>Graduating Year:</strong> {userProfile.graduating_year}
                      </p>
                    </motion.div>

                    <p className="mb-4">
                      <strong>About:</strong> {userProfile.about}
                    </p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </main>
  )
}

export default Page;