import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const page = () => {
    return (
        <main style={{ backgroundColor: "#111827" }}>

<Navbar/>
            <ul className="flex" style={{ paddingTop: "70px" }}>


                <li>
                    <button ><Link href='../Whappning/online'>
                        <div className="flex items-center justify-center" style={{ paddingLeft: "650px" }}>
                            <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">ONLINE EVENTS</span>
                                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                            </a>
                        </div>
                    </Link></button>
                </li>
                <li>
                    <button ><Link href='../Whappning/onfline'>
                        <div className="flex items-center justify-center" style={{ paddingLeft: "100px" }}>
                            <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">OFFLINE EVENTS</span>
                                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                            </a>
                        </div>
                    </Link></button>
                </li>



            </ul>



            <section className="text-gray-600 body-font relative" style={{ paddingTop: "100px" }}>
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=13.048957158957775, 80.07543201349088+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Panimalar Engineering College,
                                    Nazarathpettai, Poonamallee,
                                    Chennai, Tamil Nadu - 600123</p>
                            </div>

                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs"> PECHACKS </h2>
                                <a href="https://pechacks.org/" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                    REGISTER HERE
                                </button></a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                                <p className="leading-relaxed">team@pechacks.org</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/817/thumb/pechacks-banner.png?1701665560"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">PECHACKS 36-hr HACKATHON IN CHENNAI|JANUARY 27-28,2024

                            </h3>

                            <p className="mt-2 max-w-sm text-gray-700">

                                Welcome, Hackers!

                                "Welcome to PEC HACKS, where innovation meets impact! We are thrilled to invite you to this exciting hackathon organized by Panimalar Engineering College. It is your gateway to a world of possibilities, where passionate individuals like you come together to unleash their creativity, solve real-world challenges, and make a meaningful difference."

                                Prize Pool of ₹ 43 Lakh+ .
                            </p>
                        </a>
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0FpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7a9919910cbdf0270b5b0f291c6f7ead0f057f26/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/website%20(1).jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Global Hack Week: AI/ML Week</h2>
                            <p className="text-white leading-relaxed mt-2">February 2 – 4, 2024
                                Friday February 9, 2024
                                12:00PM to Feb 15, 4:00PM EST</p>
                            <a href="https://events.mlh.io/events/10740-global-hack-week-ai-ml-week?_gl=1*jwq4ww*_ga*MTgyNDI4NjE2OS4xNzA1OTM3Mjcw*_ga_E5KT6TC4TK*MTcwNjE1MDA0OS44LjEuMTcwNjE1MDI1NC4wLjAuMA.." target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>





                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/905/thumb/RTC_BlackWingsHacks_Background.png?1705679542" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Black Wings</h2>
                            <p className="text-white leading-relaxed mt-2">February 2 – 4, 2024
                                Register for this free, virtual hackathon for all college women in tech!</p>
                            <a href="https://rewritingthecode.org/black-wings/" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            {/*2*/}


            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=22.572691678681693, 88.43737349682571+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">GURUKUL CAMPUS, Y-12, Sector - V, Salt Lake Electronics Complex, Kolkata - 700091</p>
                            </div>

                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs"> DIVERSION </h2>
                                <a href="https://diversion.tech/" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                    REGISTER HERE
                                </button></a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                                <p className="leading-relaxed">support@diversion.tech</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/877/thumb/MLH_Event_Banner.png?1703575338"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">DIVERSION INDIA'S FIRST AI POWERED HACKATHON

                            </h3>

                            <p className="mt-2 max-w-sm text-gray-700">

                                Welcome, Hackers!

                                Diversion 2k24 is an annual 36 hour offline hackathon conducted ACM-IEM student chapter.
                                Participants compete on tracks and problem statements and develop a plethora of amazing projects from domains like Web Development, App development , Blockchain, Machine Learning and so on.
                                It is an official MLH Member event supported by Github , Filecoin , Solana , Replit and Devfolio. It is the ultimate destination for developers to test and hone their skills while getting the opportunity to connect with a budding community of fellow tech enthusiasts.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">




                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUFpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f74afa8472578e96b13873c95ac8dd5d0ab5b0d2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb74e2531ca3e0ee463ad8c55d04110fcf863b74/social-website-AD-QHD.png" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Web3Apps</h2>
                            <p className="text-white leading-relaxed mt-2">Friday February 16, 2024
                                11:00AM to Feb 18, 12:00PM EST!</p>
                            <a href="https://events.mlh.io/events/10861?_gl=1*1hgu82g*_ga*MTgyNDI4NjE2OS4xNzA1OTM3Mjcw*_ga_E5KT6TC4TK*MTcwNjE1MDA0OS44LjEuMTcwNjE1MDYxMi4wLjAuMA.." target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>


                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F647946629%2F398578739581%2F1%2Foriginal.20231125-070710?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=120%2C0%2C960%2C480&s=90c0177d6f9c9180e9e6af8e80284816" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Hack the Future Pre-hackathon Workshop - How to Present Your Project</h2>
                            <p className="text-white leading-relaxed mt-2"></p>
                            <a href="https://www.eventbrite.ca/e/hack-the-future-pre-hackathon-workshop-how-to-present-your-project-tickets-765785193127?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>







                    </div>
                </div>
            </section>
            {/*3*/}
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=23.23238987326168, 72.65352386800208+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">GANDHINAGAR GUJARAT</p>
                            </div>

                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs"> HACK THIS FALL </h2>
                                <a href="https://hackthisfall.tech/" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                    REGISTER HERE
                                </button></a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                                <p className="leading-relaxed">mail:tohackthisfall@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/654/thumb/WhatsApp_Image_2023-06-28_at_6.38.12_PM.jpeg?1687957950"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                            </h3>
                            HACK THIS FALL 4.0

                            <p className="mt-2 max-w-sm text-gray-700">

                                Welcome, Hackers!

                                We initiated the Hack This Fall Hackathon with the goal of fostering a beginner-friendly environment where people of diverse backgrounds can collaborate and create meaningful projects, offering a true hackathon experience.


                                With three successful seasons of our flagship event in the bag, we are thrilled to welcome hackers from all backgrounds and skills at Hack This Fall Hackathon Season 4.
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">




                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F500105379%2F841050789513%2F1%2Foriginal.20220306-022121?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=381%2C293%2C1840%2C920&s=2ebabd74b5d0841cf1bb31891aaec770" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">EducateHacks Hackathon</h2>
                            <p className="text-white leading-relaxed mt-2">Friday, April 12
                                EducateHacks Hackathon
                                Join us for an exciting social good themed hackathon presented by EducateHacks!

                                By EducateHacks
                                64 followers
                            </p>
                            <a href="https://www.eventbrite.com/e/educatehacks-hackathon-tickets-624057541907?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>

                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F670657309%2F570633736469%2F1%2Foriginal.20240109-151115?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C270%2C1080%2C540&s=67c5097b693fbf53428b6f7420bdf8c3" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Hypno Hacks</h2>
                            <p className="text-white leading-relaxed mt-2">Thursday, 1 February
                                Hypno Hacks
                                Get ready to be delve into the power of your subconscious with Hypno Hacks, a FREE monthly online event to support your wellbeing.
                            </p>
                            <a href="https://www.eventbrite.co.uk/e/hypno-hacks-tickets-794301034777?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>








                    </div>
                </div>
            </section>
            {/*4*/}

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.966044274308505, 77.64205512552562+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">UrbanVault Indiranagar 2024

                                    2024 16th Main Road Bengaluru, KA 560008</p>
                            </div>

                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">AI OPEN HACK DAY </h2>
                                <a href="https://www.eventbrite.com/e/ai-open-hack-day-tickets-795260584817?aff=ebdssbcitybrowse" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                    REGISTER HERE
                                </button></a>

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F671475349%2F1961593010163%2F1%2Foriginal.20240110-125926?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C77%2C1080%2C540&s=124a2404b1d6a1da4c0db7fac1cd9083"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">AI OPEN HACK DAY

                            </h3>

                            <p className="mt-2 max-w-sm text-gray-700">



                                Starting Jan 13, 2024, we’re conducting an “Open Hack Day” on every first Saturday, where AI Enthusiasts enjoy a Saturday of coding, creativity, chaotic brilliance and connect with other individuals and organizations alike.
                                Hack Day is an event where you can avail FREE GPUs for 9 hours straight with an option to pay for more on every 2nd Saturday of the month.
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">





                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F670774969%2F498953472539%2F1%2Foriginal.20240109-171044?w=355&auto=format%2Ccompress&q=75&sharp=10&s=ab36103b8a653e72d5c618faf0507765" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">AI for Good Hackathon</h2>
                            <p className="text-white leading-relaxed mt-2">Friday, February 16

                                Shape the future: join our AI for Good Hackathon and create customized GPTs for positive impact. Last year was a blast now it's your chance!


                            </p>
                            <a href="https://www.eventbrite.com/e/ai-for-good-hackathon-tickets-781931918417?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>

                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F673169869%2F880111896573%2F1%2Foriginal.20240112-121851?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=5b90d9f08b9847e11eaa5687a5f54b03" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Encode x Polkadot Hackathon: Launch Event</h2>
                            <p className="text-white leading-relaxed mt-2">Tuesday, 13 February

                                Part of the Encode x Polkadot Hackathon collection
                                Join our four-week hackathon, attend exclusive technical workshops, build on Polkadot and win prizes!


                            </p>
                            <a href="https://www.eventbrite.co.uk/e/encode-x-polkadot-hackathon-launch-event-tickets-796754924427?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>








                    </div>
                </div>
            </section>
            {/*5*/}
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=28.45042077700464, 77.28374025956998+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Manav Rachna International Institute Of Research And Studies

                                    Manav Rachna Campus Road Faridabad, HR 121004</p>
                            </div>

                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">THE CLIMATE KNOWLEDGE HUNT HACKATHON </h2>
                                <a href="https://www.eventbrite.co.uk/e/the-climate-knowledge-hunt-hackathon-tickets-798805186817?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                    REGISTER HERE
                                </button></a>

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F674894409%2F285961528991%2F1%2Foriginal.20240115-172537?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C1690%2C845&s=b3226e81b835099597edda571b8b70ca"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">THE CLIMATE KNOWLEDGE HUNT HACKATHON

                            </h3>

                            <p className="mt-2 max-w-sm text-gray-700">



                                You can register in teams of FIVE individuals of students or early career researchers, everyone is welcome. Feel free to experiment and improvise, maybe you canhave one teacher and four students, or five freinds each with a different expertise! There’s no set goal or outcome, but it is part of a planned series of events where we will all be Learning by Doing!

                                We wish to invite 5-10 teams of upto Climate Change enthusiasts or organisations on board, while aiming to:

                                Understand and create climate knowledge (esp. IPCC)
                                Learn/Develop human/machine knowledge systems
                                Make new contacts in the India Climate Landscape
                                Feedback knowledge and technology to ClimateHunt
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">





                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F679184469%2F1674354789453%2F1%2Foriginal.20240121-112813?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C229%2C1080%2C540&s=0c80184a9adae74a95922c122931d323" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Pie & AI: Jammu - Fill the Void ()</h2>
                            <p className="text-white leading-relaxed mt-2">Saturday, February 10

                                A 12hr inter collage hackathon named Fill the Void() based on Competitive programming and AI-ML.


                            </p>
                            <a href="https://www.eventbrite.com/e/pie-ai-jammu-fill-the-void-tickets-803941700267?aff=ebdssbdestsearchh" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>

                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F672633819%2F194199456570%2F1%2Foriginal.20240111-182058?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=75b298b0e5c772155418706d518fe8d1" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Artificial Intelligence Hackathon México 2024</h2>
                            <p className="text-white leading-relaxed mt-2">


                            </p>
                            <a href="https://www.eventbrite.com/e/artificial-intelligence-hackathon-mexico-2024-tickets-796210837047?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>








                    </div>
                </div>
            </section>

            {/*6*/}
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.958897554066898, 77.64835679668923+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Manav Rachna International Institute Of Research And Studies

                                    Manav Rachna Campus Road Faridabad, HR 121004</p>
                            </div>

                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">BLOCKCHAIN,METAVERSE & AI SUMMIT</h2>
                                <a href="https://www.eventbrite.com/e/blockchain-metaverse-ai-summit-bangalore-on-14-15-march-2024-tickets-780874816597?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                    REGISTER HERE
                                </button></a>

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F661560769%2F223751430406%2F1%2Foriginal.20231220-172315?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=81e3d3b99d55e0f37b346da4c31912ec"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Blockchain, Metaverse & AI Summit- Bangalore on 14- 15 March 2024

                            </h3>

                            <p className="mt-2 max-w-sm text-gray-700">



                                Conference (March 14, 2024)

                                Track 1 : Blockchain Advanced Development/Use Cases

                                Track 2 : Blockchain Technology- Impact & Strategy



                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">





                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F671215109%2F1653594205563%2F1%2Foriginal.20240110-021902?w=300&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C300%2C150&s=4c5885e6b26148b5ddbbe5454c4fed90" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Introduction to Ethical Hacking Workshop</h2>
                            <p className="text-white leading-relaxed mt-2">
                                Sunday, February 25

                                Part of the Alpha Esports & Technology Events collection
                                Learn about the basic principles of hacking and penetration testing in our Introduction to Ethical Hacking Workshop!


                            </p>
                            <a href="https://www.eventbrite.com/e/introduction-to-ethical-hacking-workshop-tickets-794983696637?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>

                        <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F494838579%2F883396599663%2F1%2Foriginal.20220912-195804?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=f6dd49917c98471aaa1a1470ee9106dc" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">HackerX - Mexico City (Full-Stack) 01/31 (Virtual)</h2>
                            <p className="text-white leading-relaxed mt-2">
                                SThursday, February 1
                                HackerX - Mexico City (Full-Stack) 01/31 (Virtual)
                                You're invited to HackerX Virtual!

                            </p>
                            <a href="https://www.eventbrite.com/e/hackerx-mexico-city-full-stack-0131-virtual-tickets-777839588147?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                REGISTER HERE
                            </button>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                </svg>
                            </a>
                        </div>






                    </div>
                </div>
            </section>



            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.971626727931042, 77.59456977756382+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Bangalore

                                    Virtual Workshop Bangalore, KA</p>
                            </div>

                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">BLOCKCHAIN,METAVERSE & AI SUMMIT</h2>
                                <a href="https://www.eventbrite.com/e/develop-a-successful-blockchain-tech-startup-business-today-entrepreneur-tickets-401880374017?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                                    REGISTER HERE
                                </button></a>

                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <a href="#" className="block">
                            <img
                                alt="Art"
                                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F335070419%2F233567016891%2F1%2Foriginal.20220605-090034?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C874%2C437&s=da87282d7e54cf6c7dc139aad0fc3653"
                                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Develop a Successful Blockchain Tech Startup Business Today! Entrepreneur

                            </h3>

                            <p className="mt-2 max-w-sm text-gray-700">



                                Develop a Successful Blockchain Tech Startup Business Today!
                                Always wanted to start an Blockchain Startup? Now we have a complete blueprint for you start your own Blockchain Tech Startup. During our Blockchain startup program you will learn and navigate through tools, software, hardware, platforms, resources, projects, processes, methods and strategies to penetrate your own Blockchain Tech Startup into emerging markets and industries



                            </p>
                        </a>
                    </div>
                </div>
            </section>

           <Footer/>
        </main>
    )
}
function Navbar() {
    return (
      <div className='w-full h-20 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
        <div className='max-w-7xl w-full flex items-center justify-between p-4'>
          <div className='flex items-center'>
            <Image
              src="/Image/logo.png"
              alt="Logo Alt Text"
              width={70} // Adjust the width as needed
              height={70} // Adjust the height as needed
              className="rounded-full"
            />
            <h6 className='font-bold ml-2 text-lg'>COALESCE</h6>
          </div>
          <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Home">HOME</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Gameit/">GAMEIT</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../SkillHive/Login">SKILLHIVE</Link></li>
          <li><Link className='text-fuchsia-500 transition-colors text-xs sm:text-base' href="../ByteBriefs/">BYTEBRIEFS</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Whappning/">WHAPPNING</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Jobbit/">JOBBIT</Link></li>
          </ul>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <div className='w-full h-20 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
        <div className='max-w-7xl w-full flex items-center justify-between p-4'>
          <div className='flex items-center'>
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <Image
                src="/Image/logo.png"
                alt="Logo Alt Text"
                width={100}
                height={100}
                className="rounded-full"
              />
  
              <span className="ml-3 text-xl">COALESCE</span>
            </a>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              © 2024 COALESCE —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @TEAM BOTS
              </a>
            </p>
            <div style={{paddingLeft:"600px"}}>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <button>
                <a className="ml-3 text-gray-400">
                  <Link href="/aboutus">
                    <h6><center>ABOUT US</center></h6>
                    <svg fill="#ffffff" width="20" height="20" viewBox="0 0 128 128" id="Layer_1" version="1.1" >
                      <g>
                        <path d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9   s55,24.7,55,55S94.3,119,64,119z" />
                        <rect height="40" width="8" x="60" y="54.5" />
                        <rect height="8" width="8" x="60" y="35.5" />
                      </g>
                    </svg>
                  </Link>
                </a>
              </button>
            </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default page;