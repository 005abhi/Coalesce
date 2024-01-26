"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const videoUrls = [
    "https://youtube.com/embed/qHGw8TqEGm8?",
    "https://youtube.com/embed/4Fannua_qiU?",
    "https://youtube.com/embed/kZdipCwbc2I?",
    "https://youtube.com/embed/GTpGEtmyE9s?",
    "https://youtube.com/embed/Y2J27N1Bino?",
    // Add more video URLs as needed
];

const Page = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleNextButtonClick = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    };

    const handlePrevButtonClick = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
    };

    return (
        <main style={{ backgroundColor: "#111827" }}>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
                <iframe
                    width="500"
                    height="700"
                    src={videoUrls[currentVideoIndex]}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <center>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '100px' }}>
                        <button onClick={handlePrevButtonClick} style={{ marginRight: '20px' }}>
                            <strong className='text-gray-700'>
                                <img
                                    className='rounded-full'
                                    alt="Previous Video"
                                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThubTY3Zmt2cWtrM3hleXFjMW1naTdzdzNxMzNyNG01OGFsaDBxcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bcXJv59X897GESK9Me/giphy.gif"
                                    style={{ height: "100px", width: "100px" }}
                                />
                                <h4>PREV VIDEO</h4>
                            </strong>
                        </button>
                        <div className='text-white'>
                            <h1><strong style={{ fontSize: '3em' }}>JOBBIT</strong></h1>
                        </div>
                        <button onClick={handleNextButtonClick} style={{ marginLeft: '20px' }}>
                            <strong className='text-gray-700 rounded-full'>
                                <img
                                    className='rounded-full'
                                    alt="Next Video"
                                    src="https://media4.giphy.com/media/nVE8OaIGkUhf7rkieR/giphy.gif?cid=ecf05e47dtcv0achh40rbzmk5huddj1otvr9orm8o9jnka3w&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                                    style={{ height: "100px", width: "100px" }}
                                />
                                <h4>NEXT VIDEO</h4>
                            </strong>
                        </button>
                    </div>

                </center>
            </div>

            <Footer/>
        </main>
    )
};



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
                    <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Whappning/">WHAPPNING</Link></li>
                    <li><Link className='text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Jobbit/">JOBBIT</Link></li>
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
export default Page;