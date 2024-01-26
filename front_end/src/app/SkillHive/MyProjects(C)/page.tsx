"use client"
// pages/signup.js
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');
  const [userData, setUserData] = useState<any | null>(null);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Check in College table
        const { data: collegeData, error: collegeError } = await supabase
          .from('College')
          .select('id, name')
          .eq('name', username)
          .single();

        if (collegeData) {
          // College found, fetch projects related to clg_id
          setUserData(collegeData);

          const { data: collegeProjects, error: projectError } = await supabase
            .from('Project')
            .select('id, title, description, abstract, content')
            .eq('clg_id', collegeData.id);

          if (collegeProjects) {
            setProjects(collegeProjects);
          }
        } else {
          console.error('College not found with the given username');
        }
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

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

const LoadingSpinner: React.FC = () => {
    return <div>Loading...</div>; // You can customize the loading spinner as needed
  };


    return (
        <Suspense fallback={<LoadingSpinner />}>
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



                       {/* SECOND DIV BLOCK */}
<div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">

{/* User Info */}
{userData && (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        
        <div className="mb-6">
            <h2 className="text-2xl font-semibold">User Info:</h2>
            <p className="text-lg">Username: {userData.username || userData.college_name}</p>
        </div>
    </motion.div>
)}

{/* Projects */}
<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
>
    <div className="mb-6">
        <h2 className="text-2xl font-semibold">Projects:</h2>
    </div>

    <ul className="list-disc pl-6">
        {projects.map((project) => (
            <li key={project.id} className="mb-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-lg">Description: {project.description}</p>
                <p className="text-lg">Abstract: {project.abstract}</p>
                <p className="text-lg">Content: {project.content}</p>
            </li>
        ))}
    </ul>
</motion.div>
</div>

                </div>
            </div>

        </main>
        </Suspense>
    );
};

export default Page;
