import React from "react";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <div >
      <Navbar />
      {/* start */}
      <div className="flex">
        {/* First Section */}
        <section className="text-gray-400 bg-gray-900 body-font flex-1 py-16">
          <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <img
                src="https://media.tenor.com/tGFp68ulbMIAAAAi/pom-bot.gif"
                alt="GIF from Giphy"
                className="mb-8"
              />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                AI QUIZBOT
              </h1>
              <p className="mb-3 text-white">
                "Unlock your full potential in computer science with our
                personalized Quizbot. Tailored to your goals and pace, our
                quizbot guides you through the intricacies of computer science,
                ensuring a comprehensive and personalized learning experience."
              </p>
              <div className="flex justify-center">
                <a
                  href="../Gameit/Aiquizbot/"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white">Let's Go</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="text-gray-400 bg-gray-900 body-font flex-1 py-16">
          <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <div className="bg-gray-800 p-8 rounded-lg transition-transform transform hover:scale-105">
              <img
                src="https://media.tenor.com/2YQj1-QHrtMAAAAi/vutura-chatbot.gif"
                alt="GIF from Giphy"
                className="py-9"
              />
              <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-white">
                AI CAREER HELPER
              </h1>
              <p className="mb-3 text-white">
                "Meet your AI career companion – a personalized guide to
                professional success. Our platform leverages artificial
                intelligence to offer tailored advice and roadmaps, ensuring
                your career journey aligns with your aspirations. Navigate
                through milestones with confidence and clarity.
              </p>
              <div className="flex justify-center">
                <a
                  href="../Gameit/Aichat/"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white">Let's Go</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* end */}

     <Footer/>
    </div>
  );
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
          <li><Link className='text-fuchsia-500  text-xs sm:text-base' href="../Gameit/">GAMEIT</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../SkillHive/Login">SKILLHIVE</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../ByteBriefs/">BYTEBRIEFS</Link></li>
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
