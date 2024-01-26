import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const page = () => {
  return (
    <main style={{ backgroundColor: "#111827" }}>

<Navbar/>
      <ul className="flex" style={{ paddingTop: "70px" }}>


        <li>
          <button ><Link href='../Whappning/onfline'>
            <div className="flex items-center justify-center" style={{ paddingLeft: "650px" }}>
              <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">OFFLINE EVENTS</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </div>
          </Link></button>
        </li>
        <li>
          <button ><Link href='../Whappning/all'>
            <div className="flex items-center justify-center" style={{ paddingLeft: "100px" }}>
              <a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">ALL EVENTS</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </div>
          </Link></button>
        </li>



      </ul>





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

      <Footer/>
    </main >
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