import React from "react";
import { Linkedin, Twitter, Github, Spotify } from "react-bootstrap-icons";

export default function Home() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const fullDate =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    date.getFullYear();

  return (
    <section className="mt-4 ml-px md:mt-3 lg:mt-0 lg:w-full">
      <h1
        className="text-8xl md:text-9xl font-black mb-2 font-darkerGrote
        lg:text-[12rem] lg:mb-0 lg:tracking-wide"
      >
        SOTD
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-2 lg:justify-between">
        <p className="opacity-80 tracking-normal ml-2 text-md font-mono md:text-xl lg:text-2xl">
          Song Of The Day
          <span className="pl-2 cursor-pointer">🎵 , </span>
          {fullDate}
        </p>

        <p className="opacity-70 tracking-normal ml-2 text-md font-mono md:text-xl lg:text-2xl hidden lg:inline">
          Beta Version 1.0.0
        </p>
      </div>
      <div
        className="bg-primary-100 my-5 h-96 rounded-xl md:h-[33rem] md:mx-1
        lg:w-full lg:h-[39rem] lg:flex lg:items-center lg:justify-center lg:py-3 shadow-md shadow-primary-100"
      >
        <div className="lg:w-1/2 lg:h-full lg:text-center lg:my-auto"></div>
      </div>
      <h2 className="text-2xl my-8 tracking-wide uppercase text-center font-bold font-darkerGrote md:text-3xl md:mt-1 lg:my-10">
        still in development...
      </h2>
      <div className="w-full px-8 md:px-14 lg:px-28 lg:mt-10">
        <ul className="flex justify-around items-center lg:justify-center lg:gap-20">
          <li className="cursor-pointer">
            <a href="https://twitter.com/tongenjs" target="_blank">
              <Twitter size={32} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://linkedin.com/in/bautista-berto"
              target="bl
            "
            >
              <Linkedin size={32} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://github.com/BertovDev" target="_blank">
              <Github size={32} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              target="_blank"
              href="https://open.spotify.com/user/bautiberto?si=5104d27df6a6463b"
            >
              <Spotify size={32} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
