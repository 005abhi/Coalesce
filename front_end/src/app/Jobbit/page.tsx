import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const page = () => {
    return (
        <main style={{ backgroundColor: "lightblue" }}>

            <div className='header'>
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
                        <div className='Header'>
                            <ul>
                                <button className='h' style={{ fontSize: '25px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/Home"><strong>Home</strong></Link></button>

                                <button className='s' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/SkillHive"><strong>SkillHive</strong></Link></button>

                                <button className='b' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/ByteBriefs"><strong>ByteBriefs</strong></Link></button>

                                <button className='g' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/Gameit"><strong>Gameit</strong></Link></button>

                                <button className='j' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/Jobbit"><strong>Jobbit</strong></Link></button>

                                <button className='w' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/Whappning"><strong>Whappning</strong></Link></button>
                            </ul>

                        </div>


                        {/* Remove the button at the end */}
                    </div>
                </header>
            </div>

            <br></br>
            <br></br>

            <div className='footer'>
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
                        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Coalesce —
                            <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Team Bots</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-400">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-400">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-400">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </footer>
            </div>
        </main>
    )
}
export default page;