import React from "react";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <div>

      <Navbar />



      {/* news start  */}
      <div className="relative bg-gray w-full h-[4400px] overflow-hidden text-left text-base text-lavenderblush-300 font-poppins">


        <div style={{paddingTop:"20px",fontSize:"50px"}}><center><h1>LATEST NEWS & UPDATES</h1></center></div>



        <div className="Header flex-col space-x-10 space-y-40 " style={{ paddingLeft: "400px", paddingTop: "0px" }}>
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





        <section className="absolute top-[414px] left-[141px] w-[1130px] h-[340px] text-left text-base text-snow-800 font-poppins">
          <img
            className="absolute top-[0px] left-[0px] w-[545px] h-[340px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2024/01/Image_under-embargo-until-January-4.png?w=1390&crop=1"
          />
          <div className="absolute top-[17px] left-[605px] w-[525px] h-[230px]">
            <div className="absolute top-[125px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[525px] h-[105px]" style={{ fontSize: '30px' }}>
              <strong>This week in AI: Microsoft’s sticks an AI ad on keyboards</strong>
            </div>

            <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
              <a href="https://techcrunch.com/2024/01/06/this-week-in-ai-microsofts-sticks-an-ai-ad-on-keyboards/" target="_blank" rel="noopener noreferrer">Show More</a>
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
        </section>
        {/* 1 */}
        <div className="absolute top-[841px] left-[141px] w-[333px] h-[593.07px] text-lavenderblush-200">
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
        {/* {/2/} */}
        <div className="absolute top-[1614px] left-[141px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://cdn.arstechnica.net/wp-content/uploads/2023/08/chatgpt-anything-tool-800x450.jpg"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                ANDROID USER COULD SOON REPLACE GOOGLE ASSISTANT WITH CHATGPT
              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://arstechnica.com/gadgets/2024/01/android-users-could-soon-replace-google-assistant-with-chatgpt/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
        <div className="absolute top-[841px] left-[553px] w-[333px] h-[593.07px] text-whitesmoke-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://cdn.arstechnica.net/wp-content/uploads/2024/01/copilot-key-800x450.jpg"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                MICROSOFT IS ADDING A NEW KEY TO PC KEYBOARDS FOR THE FIRST TIME SINCE 1994
              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://arstechnica.com/gadgets/2024/01/ai-comes-for-your-pcs-keyboard-as-microsoft-adds-dedicated-copilot-key/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
        {/* {/3/} */}
        <div className="absolute top-[1614px] left-[553px] w-[333px] h-[593.07px] text-snow-400">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://www.digitaltrends.com/wp-content/uploads/2023/04/dell-xps-15-9530-featured-e1681838803431.jpg?fit=720%2C480&p=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                DELL XPS 13, DELL XPS 15, DELL XPS 17 HEAVILY DISCOUNTED THIS WEEKEND


              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://www.digitaltrends.com/computing/dell-xps-13-15-17-deals-dell-january-2024/" target="_blank" rel="noopener noreferrer">Show More</a>
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
          </div>
        </div>
        {/* {/4/} */}
        <div className="absolute top-[841px] left-[998px] w-[334px] h-[618px] text-snow-500">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[334px] h-[306px] object-cover"
            alt=""
            src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[272px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[272px]">
              <div className="absolute top-[120px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[152px]">
                WILL GRAND THEFT AUTO 6 COME TO XBOX GAME PASS?
              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://www.digitaltrends.com/gaming/gta-6-xbox-game-pass/" target="_blank" rel="noopener noreferrer">Show More</a>
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
          </div>
        </div>
        {/* {/5/} */}
        <div className="absolute top-[1614px] left-[998px] w-[334px] h-[593.07px] text-lavenderblush-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[334px] h-[306px] object-cover"
            alt=""
            src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                MARVEL’S SPIDER-MAN 2 REVIEW: AMAZING BECOMES ULTIMATE IN STANDOUT SUPERHERO SEQUEL
              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://www.digitaltrends.com/gaming/marvels-spider-man-2-review-ps5/" target="_blank" rel="noopener noreferrer">Show More</a>
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
          </div>
        </div>
        {/* {/6/} */}
        <div className="absolute top-[2342px] left-[141px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2014/06/firefox_os_logo_large.jpg?w=1390&crop=1/"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                MOZILLA TESTS THE WATERS FOR FIREFOX OS IOT APPS, INCLUDING A SAMANTHA-STYLE VIRTUAL ASSISTANT
              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2016/03/02/mozilla-tests-the-waters-for-firefox-os-iot-apps-including-a-samantha-style-virtual-assistant/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
        {/* {/7/} */}
        <div className="absolute top-[2342px] left-[553px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2024/01/honda-ces-2024-concept-cars5.jpg?w=1390&crop=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                ALL THE FUTURE OF TRANSPORTATION TECH THAT STOOD OUT AT CES 2024


              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/13/all-the-future-of-transportation-tech-that-stood-out-at-ces-2024/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
        {/* {/8/} */}
        <div className="absolute top-[2342px] left-[998px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="data:image/jpeg;base64,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"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                FRAMEWORK SAYS HACKERS ACCESSED CUSTOMER DATA AFTER PHISHING ATTACK ON ACCOUNTING PARTNER
              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/12/framework-customer-data-stolen-phishing-keating-accounting/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
        {/* {/9/} */}
        <div className="absolute top-[3084px] left-[141px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1771032443.jpg?w=430&h=230&crop=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                GOOGLE WILL ALLOW MORE REAL-MONEY GAMES ON THE PLAY STORE


              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/11/google-will-allow-more-real-money-games-on-the-play-store/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
        {/* {/11/} */}
        <div className="absolute top-[3084px] left-[553px] w-[333px] h-[593.07px] text-snow-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2024/01/cesweird.png?w=1390&crop=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                CES 2024: THE WEIRDEST TECH, GADGETS AND AI CLAIMS FROM LAS VEGAS


              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/12/ces-2024-the-weirdest-tech-gadgets-and-ai-claims-from-in-las-vegas/" target="_blank" rel="noopener noreferrer">Show More</a>                <svg
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
        <div className="absolute top-[3084px] left-[998px] w-[333px] h-[593.07px] text-snow-100">
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
        <div className="absolute top-[3826px] left-[141px] w-[334px] h-[593.07px] text-lavenderblush-100">
          <img
            className="absolute top-[0px] left-[0px] rounded-26xl w-[334px] h-[306px] object-cover"
            alt=""
            src="https://techcrunch.com/wp-content/uploads/2024/01/Location-data.jpg?w=1390&crop=1"
          />
          <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
            <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
              <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                FTC BANS ANOTHER DATA BROKER FROM SELLING CONSUMER'S LOCATION DATA


              </div>
              <a className="mt-4 text-indigo-400 inline-flex items-center text-base">
                <a href="https://techcrunch.com/2024/01/19/ftc-ban-inmarket-location-sale-sharing/" target="_blank" rel="noopener noreferrer">Show More</a>
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
export default page;