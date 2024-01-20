// pages/index.js
import React from 'react';
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div>
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
                            <button
                                className="h"
                                style={{
                                    fontSize: "20px",
                                    paddingLeft: "50px",
                                    color: "lightblue",
                                }}
                            >
                                <Link href="/Home" legacyBehavior>
                                    <p>Home</p>
                                </Link>
                            </button>
                        </ul>
                    </div>
                    <button
                        className="h"
                        style={{
                            fontSize: "14px",
                            paddingLeft: "50px",
                            color: "lightblue",
                        }}
                    >
                        <Link href="/Home" legacyBehavior>
                            <p>Contact us</p>
                        </Link>
                    </button>
                    {/* Remove the button at the end */}
                </div>
            </header>











            {/* Blocks Container */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>

                {/* Developer Block */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    background: 'linear-gradient(to bottom, #E6F7FF, #B3E0FF)',
                    height: '70vh',
                    overflowY: 'auto',
                    textAlign: 'center', // Center align text
                }}>
                    <h1 style={{ fontSize: '2em' }}> For <strong style={{ color: 'blue' }}>Students</strong></h1>
                    <p>Join developers, practice coding skills, get upskilled and prepare for interviews.</p>
                    <Link href="/Home/Login/UserLogin" legacyBehavior>
                    <button
                        style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
                    >
                        Login
                    </button>
                    </Link>
                    <p>Don't have an account?</p>
                  <Link href="/Home/SignUp/UserSignUp" legacyBehavior> <p>Sign up.</p></Link> 
                </div>

                {/* College Block */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    background: 'linear-gradient(to bottom, #CCF5FF, #99E6FF)',
                    height: '70vh',
                    overflowY: 'auto',
                    textAlign: 'center', // Center align text
                }}>
                    <h1 style={{ fontSize: '2em' }}> For <strong style={{ color: 'blue' }}>College</strong></h1>
                    <p>Exhibit your Projects and Achievements</p>
                    <Link href="/Home/Login/CollegeLogin" legacyBehavior><button
                        style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
                    >
                        Login
                    </button></Link>
                    <p>Don't have an account?</p>
                    <Link href="/Home/SignUp/CollegeSignUp" legacyBehavior> <p>Sign up.</p></Link> 
                </div>

                {/* Company Block */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    background: 'linear-gradient(to bottom, #B3E0FF, #66B2FF)',
                    height: '70vh',
                    overflowY: 'auto',
                    textAlign: 'center', // Center align text
                }}>
                    <h1 style={{ fontSize: '2em' }}> For <strong style={{ color: 'blue' }}>Company</strong></h1>
                    <p>We are the market–leading platform to identify and hire developers with the right skills.</p>
                    <Link href="/Home/Login/CompanyLogin" legacyBehavior><button
                        style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
                    >
                        Login
                    </button>
                    </Link>
                    <p>Don't have an account?</p>
                    <Link href="/Home/SignUp/CompanySignUp" legacyBehavior><p>Sign up.</p></Link>
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
    );
};

export default page;
