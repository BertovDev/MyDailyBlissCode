import React, { useEffect } from "react";
import { Linkedin, Twitter, Github, Spotify } from "react-bootstrap-icons";

export default function Home() {
  const date = new Date();
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  const embededUrlCode = "bCDk8OSW3ks";
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
        <p className="text-md ml-2 tracking-wide font-mono text-primary lg:text-2xl lg:inline-block">
          Daily Reminder:{" "}
          <span className="underline underline-offset-4 decoration-primary-50 cursor-progress">
            Be Nice
          </span>
        </p>
      </div>
      <div
        className="bg-primary-100 my-5 h-96 rounded-xl md:h-[33rem] md:mx-1
        lg:w-full lg:h-[39rem] lg:flex lg:items-center lg:justify-center lg:py-3 shadow-md shadow-primary-100"
      >
        <iframe
          className="w-full h-full aspect-video p-5 outline-none"
          height="315"
          src={"https://www.youtube.com/embed/" + embededUrlCode}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h2 className="text-2xl my-8 tracking-wide uppercase text-center font-bold font-darkerGrote md:text-3xl md:mt-1 lg:my-5">
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
