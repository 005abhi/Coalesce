import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const page = () => {
    return (


        <main>
          <Navbar/>

 <br></br>
            <br></br>

            <div className="flex">
                {/* First Section */}
                <section className="text-gray-400 bg-gray-900 body-font flex-1 hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src="https://31.media.tumblr.com/980aa32387b22f82a878f252324e8db4/tumblr_mg1wabRW301qbe0gto1_500.gif"
                        />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                ONLINE EVENTS
                            </h1>
                            <p className="leading-relaxed mb-8">
                                TOP 2024 SUMMER TECH INTERNSHIP PROGRAMS FOR HACKERS
                            </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <Link href="../Whappning/online">

                                        Lets Go
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Second Section */}
                <section className="text-gray-400 bg-gray-900 body-font flex-1 hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src="https://media0.giphy.com/media/RKGZNZLTbFkeJ7kZ4h/200w.webp?cid=ecf05e47zqqtjz9vlwgrejlq0bhur0gncxb203jyuux9k6u2&ep=v1_gifs_search&rid=200w.webp&ct=g"
                        />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                {" "}
                                OFFLINE EVENTS
                            </h1>
                            <p className="leading-relaxed mb-8">
                                FIND, COMPETE, AND EARN POINTS AT THE LARGEST, MOST DIVERSE HACKER EVENTS IN THE WORLD.
                            </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <Link href="../Whappning/onfline">
                                        Lets Go
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-400 bg-gray-900 body-font flex-1 hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src="https://media1.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/200w.webp?cid=ecf05e478txkrxt0foowgf9amtyddpbbk6gebjbauizfwthr&ep=v1_gifs_related&rid=200w.webp&ct=g"
                        />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                {" "}
                                ALL EVENTS
                            </h1>
                            <p className="leading-relaxed mb-8">
                                IT'S FREE AND EASY TO GET STARTED! SIGN UP NOW AND GET READY TO HACK!
                            </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <Link href="../Whappning/all">
                                        Lets Go
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <br></br>
            <br></br>
             <br></br>
            <br></br>
             <br></br>
            <br></br>
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
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../ByteBriefs/">BYTEBRIEFS</Link></li>
          <li><Link className='text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Whappning/">WHAPPNING</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Jobbit/">JOBBIT</Link></li>
        </ul>
      </div>
    </div>
  );
}
function Footer() {
    return (
      <div className='w-full h-20 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center' style={{backgroundColor:"#111827"}}>
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
