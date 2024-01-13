import React from "react";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <div>
      <div className="header">
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
            <div className="Header">
              <ul>
                <button
                  className="h"
                  style={{
                    fontSize: "25px",
                    paddingLeft: "50px",
                    color: "lightblue",
                  }}
                >
                  <Link href="/Home">
                    <strong>Home</strong>
                  </Link>
                </button>

                <button
                  className="s"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "50px",
                    color: "lightblue",
                  }}
                >
                  <Link href="/SkillHive">
                    <strong>SkillHive</strong>
                  </Link>
                </button>

                <button
                  className="b"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "50px",
                    color: "lightblue",
                  }}
                >
                  <Link href="/ByteBriefes">
                    <strong>ByteBriefes</strong>
                  </Link>
                </button>

                <button
                  className="g"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "50px",
                    color: "lightblue",
                  }}
                >
                  <Link href="/Gameit">
                    <strong>Gameit</strong>
                  </Link>
                </button>

                <button
                  className="j"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "50px",
                    color: "lightblue",
                  }}
                >
                  <Link href="/Jobbit">
                    <strong>Jobbit</strong>
                  </Link>
                </button>

                <button
                  className="w"
                  style={{
                    fontSize: "16px",
                    paddingLeft: "50px",
                    color: "lightblue",
                  }}
                >
                  <Link href="/Whappning">
                    <strong>Whappning</strong>
                  </Link>
                </button>
              </ul>
            </div>

            {/* news start  */}
            <div className="relative bg-gray w-full h-[2344px] overflow-hidden text-left text-base text-lavenderblush-300 font-poppins">
              <div className="absolute top-[0px] left-[503px] w-[432px] h-[247px] text-center text-[42px]">
                <div className="absolute top-[0px] left-[0px] w-[432px] h-[247px]">
                  <h3 className="m-0 absolute top-[0px] left-[57px] text-inherit tracking-[0.01em] leading-[177.9%] font-bold font-inherit inline-block w-[318px] h-[135px]">
                    <p className="m-0">Latest news</p>
                    <p className="m-0 text-steelblue">
                      <span className="text-black">{` `}</span>
                      <span>Updates</span>
                    </p>
                  </h3>
                  <div className="absolute top-[176px] left-[0px] text-[20px] leading-[189.5%] font-medium text-lavenderblush-400 inline-block w-[432px] h-[71px]">
                    Lorem Ipsum is simply dummy text of the printing .
                  </div>
                </div>
              </div>
              <div className="absolute top-[284px] left-[247px] w-[946px] h-12 text-center text-sm text-steelblue">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[162px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-aliceblue-200 w-[162px] h-12" />
                  <div className="absolute top-[11px] left-[34px] text-sm tracking-[0.01em] leading-[177.9%] font-poppins text-steelblue text-center">{`Lorem ipsum `}</div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[196px] w-[162px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-aliceblue-200 w-[162px] h-12" />
                  <div className="absolute top-[11px] left-[34px] text-sm tracking-[0.01em] leading-[177.9%] font-poppins text-steelblue text-center">{`Lorem ipsum `}</div>
                </button>
                <div className="absolute top-[0px] left-[392px] w-[162px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-aliceblue-200 w-[162px] h-12" />
                  <div className="absolute top-[11px] left-[34px] tracking-[0.01em] leading-[177.9%]">{`Lorem ipsum `}</div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[588px] w-[162px] h-12">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-aliceblue-200 w-[162px] h-12" />
                  <div className="absolute top-[11px] left-[34px] text-sm tracking-[0.01em] leading-[177.9%] font-poppins text-steelblue text-center">{`Lorem ipsum `}</div>
                </button>
                <div className="absolute top-[0px] left-[784px] w-[162px] h-12 text-white">
                  <div className="absolute top-[0px] left-[0px] rounded-11xl bg-steelblue w-[162px] h-12" />
                  <div className="absolute top-[11px] left-[34px] tracking-[0.01em] leading-[177.9%]">{`Lorem ipsum `}</div>
                </div>
              </div>
              <section className="absolute top-[414px] left-[141px] w-[1130px] h-[340px] text-left text-base text-snow-800 font-poppins">
                <img
                  className="absolute top-[0px] left-[0px] w-[545px] h-[340px] object-cover"
                  alt=""
                  src="/rectangle-19@2x.png"
                />
                <div className="absolute top-[17px] left-[605px] w-[525px] h-[230px]">
                  <div className="absolute top-[125px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[525px] h-[105px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the .
                  </div>
                 
                </div>
              </section>
              <div className="absolute top-[831px] left-[141px] w-[333px] h-[593.07px] text-lavenderblush-200">
                <img
                  className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
                  alt=""
                  src="/rectangle-20@2x.png"
                />
                <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
                  <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
                    <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the .
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="absolute top-[1614px] left-[136px] w-[333px] h-[593.07px] text-snow-100">
                <img
                  className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
                  alt=""
                  src="/rectangle-20@2x.png"
                />
                <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
                  <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
                    <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the .
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="absolute top-[841px] left-[553px] w-[333px] h-[593.07px] text-whitesmoke-100">
                <img
                  className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
                  alt=""
                  src="/rectangle-21@2x.png"
                />
                <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
                  <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
                    <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the .
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="absolute top-[1624px] left-[553px] w-[333px] h-[593.07px] text-snow-400">
                <img
                  className="absolute top-[0px] left-[0px] rounded-26xl w-[333px] h-[306px] object-cover"
                  alt=""
                  src="/rectangle-21@2x.png"
                />
                <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
                  <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
                    <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the .
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="absolute top-[841px] left-[988px] w-[334px] h-[618px] text-snow-500">
                <img
                  className="absolute top-[0px] left-[0px] rounded-26xl w-[334px] h-[306px] object-cover"
                  alt=""
                  src="/rectangle-22@2x.png"
                />
                <div className="absolute top-[346px] left-[0px] w-[333px] h-[272px]">
                  <div className="absolute top-[0px] left-[0px] w-[333px] h-[272px]">
                    <div className="absolute top-[120px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[152px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the .
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="absolute top-[1623px] left-[1016px] w-[334px] h-[593.07px] text-lavenderblush-100">
                <img
                  className="absolute top-[0px] left-[0px] rounded-26xl w-[334px] h-[306px] object-cover"
                  alt=""
                  src="/rectangle-22@2x.png"
                />
                <div className="absolute top-[346px] left-[0px] w-[333px] h-[247.07px]">
                  <div className="absolute top-[0px] left-[0px] w-[333px] h-[247.07px]">
                    <div className="absolute top-[103px] left-[0px] tracking-[0.01em] leading-[210.9%] inline-block w-[333px] h-[144.07px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the .
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="absolute top-[1192px] left-[0px] bg-aliceblue-100 w-[1440px] h-[604px] hidden" />
              <div className="absolute top-[1218px] left-[0px] bg-aliceblue-100 w-[1440px] h-[822px] hidden" />
            </div>

            {/* news end */}
          </div>
        </header>
      </div>
      <div className="footer">
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
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              © 2024 Coalesce —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Team Bots
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
