"use client"

import React, { useEffect, useState ,Suspense} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';

// Define a type for your project data
interface Project {
  id: number;
  title: string;
  description: string;
  abstract: string;
  content : string;
  user_id?: number;
  clg_id?: number; // Assuming clg_id is optional
  username?: string;
  college_name?: string; // Add a property for college name
}
export const page = () => {




  const [projects, setProjects] = useState<Project[] | undefined>(undefined); // Use the defined type

  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch all projects from the Project table
        const { data: projectsData, error: projectsError } = await supabase
          .from('Project') // Specify the type using generics
          .select('id, title, abstract, description,content,  user_id, clg_id')
          .order('created_at', { ascending: false });

        if (projectsError) {
          console.error('Error fetching projects:', projectsError.message);
        } else {
          // Get the user and college information for each project
          const projectsWithUserAndCollege: Project[] = await Promise.all(
            projectsData.map(async (project) => {
              // Fetch user information
              const { data: userData, error: userError } = await supabase
                .from('User')
                .select('username')
                .eq('id', project.user_id)
                .single();

              if (userError) {
                console.error('Error fetching user information:', userError.message);
              } else {
                project.username = userData?.username || 'Unknown User';
              }

              // Fetch college information if clg_id is present
              if (project.clg_id) {
                const { data: collegeData, error: collegeError } = await supabase
                  .from('College')
                  .select('name')
                  .eq('id', project.clg_id)
                  .single();

                if (collegeError) {
                  console.error('Error fetching college information:', collegeError.message);
                } else {
                  project.college_name = collegeData?.name || 'Unknown College';
                }
              }

              return project;
            })
          );

          setProjects(projectsWithUserAndCollege);
        }
      } catch (error: any) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchProjects();
  }, [username]); // Fetch projects when the component mounts or when the username changes

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


  const imageLinks : any = ["https://d3i71xaburhd42.cloudfront.net/b9ccf344a7ffefd54f1a4d4fdeeeece13c672025/5-Figure6-1.png",
    "https://repository-images.githubusercontent.com/283511798/5977a300-53b9-11eb-8e4a-924146eaef66",
    "https://i0.wp.com/tejasnikumbh.com/wp-content/uploads/2021/05/Quadcopter-drone-final.jpg?fit=509%2C339&ssl=1&resize=350%2C200",                            
    "https://www.thermodyneboilers.com/wp-content/uploads/2023/05/A2-1.jpg",
    "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg",                                         
  
    ];





    const LoadingSpinner: React.FC = () => {
      return <div>Loading...</div>; // You can customize the loading spinner as needed
    };
  return (
    <Suspense fallback={<LoadingSpinner />}>
    <main style={{ overflow: "hidden" }}>

      <div className="header">
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image
                src="/Image/logo.png"
                alt="Logo Alt Text"
                width={100}
                height={100}
                className="rounded-full"
              />
              <span className="ml-3 text-xl"></span>
            </a>
            <div className="Header">
              <ul>
                <a href="#_" onClick={() => window.location.reload()} className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">SKILLHIVE</span>
                  <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>

              </ul>
            </div>

            {/* Remove the button at the end */}
          </div>
        </header>
      </div>
      {/* BODY SKILLHIVE ST */}
      <div className="w-full flex flex-row flex-wrap bg-gray-900 text-white">


        <div className="w-full bg-gray-900 h-screen flex flex-row flex-wrap justify-center text-white">


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


          {/* Main Content */}
          <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
            <div className="bg-gray-900 w-full shadow rounded-lg p-5">

            </div>

            {/* Example Content */}
            <div className="mt-3 flex flex-col">
              {/* Example 1 */}
              {projects?.map((project, index) => (
                <div key={project.id} className="container px-5 py-24 mx-auto flex flex-col" >
                  <div className="lg:w-4/6 mx-auto">
                    <p>Posted by: {project.username}</p>
                    {project.college_name && <p>College: {project.college_name}</p>}
                    <div className="rounded-lg h-64 overflow-hidden">
                      <img alt="content" className="object-cover object-center h-full w-full" src={imageLinks[index % imageLinks.length]}></img>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                        <div className="flex flex-col items-center text-center justify-center">
                          <h2 className="font-medium title-font mt-4 text-white text-lg">{project.title}</h2>
                          <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                          <p className="text-base text-gray-400">{project.description}</p>
                        </div>
                      </div>
                      <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">{project.abstract}</p>
                        <a href = {project.content} className="text-indigo-400 inline-flex items-center">Read More
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Example 2 */}
              

              {/* Example 3 */}
              
            </div>
          </div>
        </div>
      </div>

      {/* BODY SKILLHIVE END*/}
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
                  strokeLinecap="round"
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
                  strokeLinecap="round"
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
                  strokeLinecap="round"
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
                  strokeLinecap="round"
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
    </main >
    </Suspense>
  );
};

export default page;
