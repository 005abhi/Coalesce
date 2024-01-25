"use client"

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import infoCards from './libs/InfoCards'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'


export default function Home() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <Navbar />
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl'> Coalesce</h1>
            <h2 className='text-md md:text-2xl'>Reskilling Workforce</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>Coalesce is a comprehensive platform
that serves as a bridge between
educational institutions and industry
demands, facilitating seamless skill
alignment and boosting employability
among Indian youth.</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
          <a href= " " className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors flex items-center justify-center'>
  About Us
</a>

            <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>Contact</button>
          </div>
        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/>
        </div>

      </header>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8 " >
  <div className='absolute -z-10 h-full w-full overflow-hidden'>
    <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl" />
  </div>
  <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
    <h3 className='text-4xl md:text-5xl font-bold'>Keeps you Updated on Tech World with these !!</h3>
    <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative hover:">
    {infoCards.map((infoCard) => (
  <InfoCard key={infoCard.id} buttonText={infoCard.buttonText} Icon={infoCard.icon} title={infoCard.title}>
    <div className="flex flex-col items-center justify-center mb-4 p-4">
      <p className="text-base text-center md:text-center">{infoCard.bodyText}</p>
      <a href={infoCard.href} className='bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800 mt-2'>{infoCard.buttonText}</a>
    </div>
  </InfoCard>
))}

      
    </div>
  </div>
</section>


<h4 className="text-4xl md:text-5xl font-bold">Do You have time to Kill why dont you check out these</h4>
  <div className="container px-8 py-40 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-fuchsia-600 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Jobbits</h2>
            <p className="leading-relaxed text-base">JobBits is an innovative platform that delivers bite-sized videos for quick and engaging tech updates. In a rapidly evolving tech landscape, staying informed is crucial, and JobBits aims to make this process seamless and enjoyable.</p>
            <a href="../Jobbit/" className="mt-3 text-fuchsia-800 inline-flex items-center hover:text-fuchsia-600 transition-colors">
  Check Out
  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</a>

          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-fuchsia-600 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Whappning</h2>
            <p className="leading-relaxed text-base">Whappning is your go-to portal for discovering and staying connected with the vibrant world of technology events. In a landscape where innovation is constantly evolving, Whappning serves as your digital compass, guiding you to the nearest and most exciting tech gatherings. </p>
            <a href="../Whappning" className="mt-3 text-fuchsia-800 inline-flex items-center hover:text-fuchsia-600 transition-colors">
  Check Out
  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</a>
          </div>
        </div>
      </div>
    </div>
  </div>



      
      <Feedback />
      <Footer />

    </main>
  )
}

interface IInfoCardProps {
  title:string;
  Icon:LucideIcon;
  children:ReactElement<any,any>
}

function InfoCard({title,Icon,children}:IInfoCardProps) {
  return (
    <div className='w-full h-80  flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}


function Feedback(){
  return(
<section className="text-gray-400 bg-gray body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-white">
              FEEDBACK !!{" "}
            </h1>
            <p className="leading-relaxed mt-4">
              "Your feedback is crucial in shaping the future of Coalesce. We are committed to creating a platform that effectively bridges the gap between education and academics. Your insights will help us refine our services and enhance the overall learning experience. Join us in this collaborative journey of redefining the intersection of education and academics. Together, we can make learning more accessible, engaging, and impactful."
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">
              FEEDBACK
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-400"
              >
                COMMENTS
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-fuchsia-700 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-500 rounded text-lg">
              Submit
            </button>
            <p className="text-xs mt-3"></p>
          </div>
        </div>
      </section>
  )
  
}
function Footer(){
  return(
    <div className="footer">
        <footer className="text-gray-400 bg-black body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
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
        </footer>
      </div>
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
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Gameit/">GameIt</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../SkillHive/">Skillhive</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../ByteBriefs/">ByteBriefs</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Whappning/">Whappning</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="../Jobbit/">Jobbit</Link></li>
        </ul>
      </div>
    </div>
  );
}
