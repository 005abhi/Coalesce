import React from "react";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <div>

      <Navbar />

      {/* news start  */}
      <div className="relative bg-gray w-full h-[1800px] overflow-hidden text-left text-base text-lavenderblush-300 font-poppins">
        <div style={{ paddingTop: "20px", fontSize: "50px" }}><center><h1>AI NEWS & UPDATES</h1></center></div>



        <div className="Header flex-col space-x-10 space-y-40 " style={{ paddingLeft: "450px", paddingTop: "0px" }}>
          <a href="/ByteBriefs/ai" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group " >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-indigo-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">AI</span>
          </a>

          <a href="/ByteBriefs/cs" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">CS & TECH</span>
          </a>

          <a href="/ByteBriefs/gadget" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-indigo-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">GADGET</span>
          </a>

          <a href="/ByteBriefs/gaming" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-indigo-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">GAMING</span>
          </a>

          <a href="/ByteBriefs/security" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-indigo-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">SECURITY</span>
          </a>
        </div>


        <div className="absolute top-[500px] left-[214px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2024/01/Image_under-embargo-until-January-4.png?w=1390&crop=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                THIS WEEK IN AI: MICROCRAFT'S STICKS AN AI AD ON KEYBOARDS



              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/06/this-week-in-ai-microsofts-sticks-an-ai-ad-on-keyboards/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
          </div>
        </div>
        <div className="absolute top-[1150px] left-[214px] w-[333px] h-[593.07px] text-lavenderblush-200">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2024/01/Nabla-office.jpeg?w=1390&crop=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                NABLA RAISES ANOTHER $24 MILLION FOR ITS AI ASSISTANT FOR DOCTORS THAT AUTOMATICALLY WRITES CLINICAL NOTES
              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/05/nabla-raises-another-24-million-for-its-ai-assistant-for-doctors/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
          </div>
        </div>

        {/* {/12/} */}
        <div className="absolute top-[500px] left-[888px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2024/01/passport-fake-KYC.jpg?w=1390&crop=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                GENAI COULD MAKE KYC EFFECTIVELY USELESS



              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/08/gen-ai-could-make-kyc-effectively-useless/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
          </div>
        </div>


        <div className="absolute top-[1192px] left-[0px] bg-aliceblue-100 w-[1440px] h-[604px] hidden" />
        <div className="absolute top-[1218px] left-[0px] bg-aliceblue-100 w-[1440px] h-[822px] hidden" />
      </div>


      {/* news end */}



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
export default page