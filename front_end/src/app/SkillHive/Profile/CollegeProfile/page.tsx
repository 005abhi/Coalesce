'use client'
// pages/page.tsx
// pages/page.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';
import Image from "next/image";
import Link from "next/link";

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

const page = () => {

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
                    .from('College')
                    .select('*')
                    .eq('name', paramsObject.username)
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
            router.push(`/SkillHive/Profile/UpdateCollegePrf?username=${encodeURIComponent(username)}`);
        }
    }
    const pushToPostP = () => {
        if (username) {
            router.push(`/SkillHive/PostProject(C)?username=${encodeURIComponent(username)}`);
        }
    };

    const pushToPro = () => {
        if (username) {
            router.push(`/SkillHive/Profile/CollegeProfile?username=${encodeURIComponent(username)}`);
        }
    };
    
    const pushToHome = () => {
        if (username) {
            router.push(`/SkillHive/SHCollege?username=${encodeURIComponent(username)}`);
        }
    };
    
    const pushToMyPrj = () => {
        if (username) {
            router.push(`/SkillHive/MyProjects(C)?username=${encodeURIComponent(username)}`);
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


                    <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased" style={{ backgroundColor: 'dark' }}>

                        <div className="flex items-center justify-center h-screen">
                            <div className="max-w-screen-md">
                                <h1 className="text-3xl font-bold mb-6"><strong>College Profile</strong></h1>
                                {userProfile ? (
                                    <div className="mb-8 pl-4">
                                        <p className="mb-4"><strong>Name:</strong> {userProfile.name}</p>
                                        <p className="mb-4"><strong>Email:</strong> {userProfile.email}</p>
                                        <p className="mb-4"><strong>Contact:</strong> {userProfile.contact}</p>
                                        <p className="mb-4"><strong>Website:</strong> {userProfile.website}</p>

                                        {/* Address Section with Light Blue Background */}
                                        <div style={{ backgroundColor: 'dark', padding: '20px', margin: '20px 0' }} className="mb-8">
                                            <p className="mb-4"><strong>Address:</strong> {userProfile.address}</p>
                                            <p className="mb-4"><strong>Country:</strong> {userProfile.country}</p>
                                            <p className="mb-4"><strong>State:</strong> {userProfile.state}</p>
                                            <p className="mb-4"><strong>City:</strong> {userProfile.city}</p>
                                        </div>

                                        <p className="mb-4"><strong>About:</strong> {userProfile.about}</p>
                                    </div>
                                ) : (
                                    <p>Loading......</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    );
};

export default page;
