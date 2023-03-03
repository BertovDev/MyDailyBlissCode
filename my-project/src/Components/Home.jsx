import React from "react";
import { Linkedin, Twitter, Github } from "react-bootstrap-icons";

export default function Home() {
  return (
    <section className="mt-6 ml-px">
      <h1 className="text-8xl font-black mb-2 font-darkerGrote">SOTD</h1>
      <p className="opacity-80 tracking-normal ml-2 text-md font-mono">
        Song Of The Day
        <span className="pl-1 cursor-pointer">🎵</span>
      </p>
      <div className="bg-primary-100 my-5 h-96 rounded-xl"></div>
      <h2 className="text-2xl my-10 tracking-wide uppercase text-center font-bold font-darkerGrote">
        still in development...
      </h2>
      <div className="w-full px-8">
        <ul className="flex justify-around items-center">
          <li className="cursor-pointer">
            <Twitter size={32} />
          </li>
          <li className="cursor-pointer">
            <Linkedin size={32} />
          </li>
          <li className="cursor-pointer">
            <Github size={32} />
          </li>
        </ul>
      </div>
    </section>
  );
}
