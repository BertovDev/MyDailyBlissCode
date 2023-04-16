import React from "react";
import { Linkedin, Twitter, Github, Spotify } from "react-bootstrap-icons";

export default function SOTDFooter() {
  return (
    <>
      <div className="px-8 mt-10 w-full md:px-14 lg:px-28 lg:my-6">
        <ul className="flex mt-auto justify-around items-center lg:hidden lg:gap-20">
          <li className="cursor-pointer">
            <a href="https://twitter.com/tongenjs" target="_blank">
              <Twitter size={32} />
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
