"use client"
// pages/signup.js
import React, { useEffect, useState , Suspense} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import supabase from '@/config/supabaseClient';
import { motion } from 'framer-motion';
import Link from 'next/link';

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [abstract, setAbstract] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const saveProject = async (userId: any) => {
    try {
      const { data, error } = await supabase
        .from('Project')
        .insert([
          {
            title,
            description,
            abstract,
            content,
            user_id: userId,
          },
        ]);

      if (error) {
        console.error('Error saving project details:', error.message);
      } else {
        console.log('Project details saved successfully:', data);
        router.push(`/SkillHive/Profile/UserProfile?username=${username}`);
      }
    } catch (error: any) {
      console.error('Error during project details saving:', error.message);
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async (userId: any) => {
    try {
      if (image) {
        const { data, error } = await supabase
          .storage
          .from('images')
          .upload(`/${username}/${image.name}`, image, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) {
          console.error('Error uploading image:', error.message);
        } else {
          console.log('Image uploaded successfully:', data);
          saveProject(userId);
        }
      } else {
        // No image provided, proceed with saving project details
        saveProject(userId);
      }
    } catch (error: any) {
      console.error('Error during image upload:', error.message);
    }
  };

  const handleSubmit = async () => {
    // Check if required fields have valid input
    if (title.trim() === '' || abstract.trim() === '' || content.trim() === '') {
      console.error('Please fill in all required fields');
      return;
    }

    // Fetch user ID (id) from the User table based on the username
    try {
      const { data: userData, error: userError } = await supabase
        .from('User')
        .select('id')
        .eq('username', username)
        .single();

      if (userError) {
        console.error('Error fetching user ID:', userError.message);
      } else {
        const userId = userData?.id;
        await handleImageUpload(userId);
      }
    } catch (error: any) {
      console.error('Error during user ID retrieval:', error.message);
    }
  };

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

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center bg-gray-100 w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded shadow-md w-96"
            >
              <h1 className="text-3xl font-semibold mb-6 text-gray-800">POST <br />YOUR <br />PROJECT</h1>
              <form className="space-y-4">
                <motion.label
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="block"
                >
                  <span className="text-gray-700">Title:</span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md text-gray-700"
                  />
                </motion.label>
                <br />
                <motion.label>
                  <span className="text-gray-700">Description:</span>
                  <input type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md text-gray-700" />
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="block"
                >
                  <span className="text-gray-700">Abstract:</span>
                  <textarea
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md text-gray-700"
                  />
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="block"
                >
                  <span className="text-gray-700">Provide a link to your project report:</span>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md text-gray-700"
                  />
                </motion.label>

                <motion.label
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="block"
                >
                  <span className="text-gray-700">Image:</span>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    className="mt-1 p-2 w-full border rounded-md text-gray-700"
                  />
                </motion.label>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
    </Suspense>
  );
};

export default page;
