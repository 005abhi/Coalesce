import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const page = () => {
    return (
        <main style={{ backgroundColor:  "#111827" }}>

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



            {/* body */}

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.963725306108774, 77.50601830808768+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">HOYAHACKS</h2>
                                <a href="https://hoyahacks.georgetown.domains/" target="_blank" rel="noopener noreferrer">REGISTER HERE</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://hoyahacks.georgetown.domains/wp-content/uploads/2024/01/POWERED-BY-1536x922.png"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl"> Hoya Hacks 2024 Powered by Cloudforce, January 26-28, 2024, Georgetown University</h3>

                            <p className="mt-2 max-w-sm text-gray-700">
                           
Hackers, we are excited for the 2024 Hack Season. Hoya Hacks 2024 Powered by Cloudforce, will be back to an in-person hack at Georgetown University. We will be hacking in Healey Family Student Center from January 26-28, 2024. Find more info below and registration. Spread the word and #HoyaHaxa ! #HoyaHaxa
                            </p>
                        </a>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">HOYAHACKS</h2>
                                <a href="https://hoyahacks.georgetown.domains/" target="_blank" rel="noopener noreferrer">Show More</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>







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