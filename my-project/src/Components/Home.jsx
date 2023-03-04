import React from "react";
import { Linkedin, Twitter, Github, Spotify } from "react-bootstrap-icons";

export default function Home() {
  return (
    <section className="mt-6 ml-px my-section">
      <h1 className="text-8xl md:text-9xl font-black mb-2 font-darkerGrote">
        SOTD
      </h1>
      <p className="opacity-80 tracking-normal ml-2 text-md font-mono md:text-xl">
        Song Of The Day
        <span className="pl-1 cursor-pointer">🎵</span>
      </p>
      <div className="bg-primary-100 my-5 h-96 md:h-[32rem] rounded-xl"></div>
      <h2 className="text-2xl my-10 tracking-wide uppercase text-center font-bold font-darkerGrote md:text-3xl">
        still in development...
      </h2>
      <div className="w-full px-8">
        <ul className="flex justify-around items-center">
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
