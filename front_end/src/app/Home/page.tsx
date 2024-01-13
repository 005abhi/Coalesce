import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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

                <button className='b' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/ByteBriefes"><strong>ByteBriefes</strong></Link></button>

                <button className='g' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/Gameit"><strong>Gameit</strong></Link></button>

                <button className='j' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/Jobbit"><strong>Jobbit</strong></Link></button>

                <button className='w' style={{ fontSize: '16px', paddingLeft: '50px', color: 'lightblue' }}><Link href="/Whappning"><strong>Whappning</strong></Link></button>
              </ul>

            </div>

            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">

              <div className="absolute top-39 right-10 mr-4 mt-4" style={{ color: "white" }}>
                <Link href="/Login">
                  <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512" fill='white'>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </Link>


              </div>

            </nav>
            {/* Remove the button at the end */}
          </div>
        </header>
      </div>
{/*HERO*/}
<div>
      <section className="text-gray-400 bg-gray-900 body-font px-5 py-24">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Reskilling Workforce
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Connecting companies’ training needs to colleges' training
              opportunities just got easier. With our innovative platform, we
              bridge the gap between industry requirements and educational
              offerings, Discover a new era of collaboration between companies
              and colleges, where education meets industry demands effortlessly.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="Bill Sitting using laptop 1 (1).png"
            />
          </div>
        </div>
      </section>
    </div>
{/*END - of - HERO*/}
{/* SNIP */}
<div>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">5</h2>
        <p className="leading-relaxed">Sections</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">3</h2>
        <p className="leading-relaxed">Logins</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">100+</h2>
        <p className="leading-relaxed">Colleges</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">1000+</h2>
        <p className="leading-relaxed">Students</p>
      </div>
    </div>
  </div>
</section>
    </div>
{/* END-oF -SNIP */}
{ /*BODY*/}
<section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-8 py-16 mx-auto">
        {/* Shooting Stars Block */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-xl title-font font-medium mb-4">
              SkillHive
            </h2>
            <p className="leading-relaxed text-base">
              Explore Projects and Profiles of students frzom different colleges.
            </p>
            <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-6 h-6 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-24 w-24 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
          <svg
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="4"
  className="sm:w-16 sm:h-16 w-10 h-10"
  viewBox="0 0 48 48"
>
  <path d="M 16.5 2 C 14.578125 2 13 3.578125 13 5.5 C 13 6.046875 13.148438 6.539063 13.375 7 L 13 7 C 10.800781 7 9 8.800781 9 11 C 9 11.734375 9.214844 12.40625 9.5625 13 L 9 13 C 6.800781 13 5 14.800781 5 17 C 5 17.757813 5.222656 18.457031 5.59375 19.0625 C 3.585938 19.269531 2 20.941406 2 23 C 2 25.058594 3.585938 26.730469 5.59375 26.9375 C 5.222656 27.542969 5 28.242188 5 29 C 5 31.199219 6.800781 33 9 33 L 9.5625 33 C 9.214844 33.59375 9 34.265625 9 35 C 9 37.199219 10.800781 39 13 39 L 13.375 39 C 13.148438 39.460938 13 39.953125 13 40.5 C 13 42.421875 14.578125 44 16.5 44 L 17.1875 44 C 17.074219 44.316406 17 44.648438 17 45 C 17 46.644531 18.355469 48 20 48 L 30 48 C 31.644531 48 33 46.644531 33 45 C 33 44.648438 32.925781 44.316406 32.8125 44 L 33.5 44 C 35.421875 44 37 42.421875 37 40.5 C 37 39.953125 36.851563 39.460938 36.625 39 L 37 39 C 39.199219 39 41 37.199219 41 35 C 41 34.265625 40.785156 33.59375 40.4375 33 L 41 33 C 43.199219 33 45 31.199219 45 29 C 45 28.242188 44.777344 27.542969 44.40625 26.9375 C 46.414063 26.730469 48 25.058594 48 23 C 48 20.941406 46.414063 19.269531 44.40625 19.0625 C 44.777344 18.457031 45 17.757813 45 17 C 45 14.800781 43.199219 13 41 13 L 40.4375 13 C 40.785156 12.40625 41 11.734375 41 11 C 41 8.800781 39.199219 7 37 7 L 36.625 7 C 36.851563 6.539063 37 6.046875 37 5.5 C 37 3.578125 35.421875 2 33.5 2 Z M 16.5 4 L 33.5 4 C 34.339844 4 35 4.660156 35 5.5 C 35 6.339844 34.339844 7 33.5 7 L 30 7 C 29.96875 7 29.9375 7 29.90625 7 C 29.875 7 29.84375 7 29.8125 7 C 29.261719 7.050781 28.855469 7.542969 28.90625 8.09375 C 28.957031 8.644531 29.449219 9.050781 30 9 L 37 9 C 38.117188 9 39 9.882813 39 11 C 39 12.117188 38.117188 13 37 13 L 21 13 C 20.96875 13 20.9375 13 20.90625 13 C 20.566406 13.019531 20.261719 13.207031 20.09375 13.5 C 20.09375 13.511719 20.09375 13.519531 20.09375 13.53125 C 19.964844 13.757813 19.933594 14.027344 20 14.28125 C 20.011719 14.292969 20.019531 14.300781 20.03125 14.3125 C 20.03125 14.332031 20.03125 14.355469 20.03125 14.375 C 20.042969 14.386719 20.050781 14.394531 20.0625 14.40625 C 20.09375 14.484375 20.136719 14.558594 20.1875 14.625 C 20.199219 14.636719 20.207031 14.644531 20.21875 14.65625 C 20.289063 14.742188 20.375 14.816406 20.46875 14.875 C 20.488281 14.886719"
  ></path>
</svg>

          </div>
        </div>

        {/* The Catalyzer Block */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-xl title-font font-medium mb-4">
              ByteBriefs
            </h2>
            <p className="leading-relaxed text-base">
              Saving you time while keeping you informed and ahead in the
              rapidly evolving tech landscape.
            </p>
            <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-6 h-6 ml-2"
                viewBox="0 0 24 24"
                 >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 order-first sm:order-none sm:h-32 h-24 w-24 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              
              <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
></path>
            </svg>
          </div>
        </div>

        {/* Skill Hive Block */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-xl title-font font-medium mb-4">
              Game-It
            </h2>
            <p className="leading-relaxed text-base">Inculcating Point based
structure to retain users
and to motivate students
to keep on track</p>
            <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-6 h-6 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-24 w-24 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
></path>
            </svg>
          </div>
        </div>

        {/* Byte Briefs Block */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-xl title-font font-medium mb-4">
              Jobbit
            </h2>
            <p className="leading-relaxed text-base">
            Short form video content
displaying only content that
encourages devolopment in
students knowledge from top
industrialists
            </p>
            <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-6 h-6 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-24 w-24 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z"
></path>
            </svg>
          </div>
        </div>

        {/* Gameit Block */}
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-xl title-font font-medium mb-4">
             Whappning
            </h2>
            <p className="leading-relaxed text-base">Meet your Heros !! Take
part in tech talk shows
workshops,tutorials
everything near your
location</p>
            <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                className="w-6 h-6 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:h-32 h-24 w-24 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              className="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
             <path d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
{/*end-of-body*/}
{/* frontlog */}
<section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">Sign into Coalesce !! </h1>
          <p className="leading-relaxed mt-4">Sign into Coalesce and bridging the gap between education and academics has never been easier. Our platform seamlessly connects students with educational resources, fostering a collaborative environment that enhances the learning experience. Join us in redefining the way education and academics converge."</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
          <p className="text-xs mt-3">U will never regret this</p>
        </div>
      </div>
    </section>
{/* end-of-frontlog */}
{/*footer*/}
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


