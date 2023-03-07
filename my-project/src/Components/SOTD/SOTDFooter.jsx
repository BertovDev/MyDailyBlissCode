import React from "react";
import { Linkedin, Twitter, Github, Spotify } from "react-bootstrap-icons";

export default function SOTDFooter() {
  return (
    <>
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
    </>
  );
}
