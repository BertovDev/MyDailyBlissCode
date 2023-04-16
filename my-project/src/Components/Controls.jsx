import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Controls() {
  const sections = ["SOTD", "STUFF", "BENJI"];

  function showContent(contentID) {
    const content = document.getElementById(contentID);
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      content.classList.add("flex");
      gsap.from(content, {
        opacity: 0,
        duration: 0.7,
        y:50,
      })
    }

    const results = sections.filter((section) => section !== contentID);
    results.map((el) => {
      document.getElementById(el).classList.add("hidden");
      document.getElementById(el).classList.remove("flex");
    });
  }

  useEffect(() => {
    showContent("SOTD");
  }, []);
  return (
    <ul className="pr-5 py-5 my-auto text-base md:text-base  flex flex-row lg:flex-col items-center justify-center gap-x-6 md:gap-4 2xl:text-2xl lg:right-14">
      <li onClick={() => showContent("SOTD")} className="border px-2 py-px cursor-pointer rounded-full bg-primary-100 hover:bg-white hover:text-primary-100 transition-all">
        1
      </li>
      <li onClick={() => showContent("STUFF")} className="border px-2 py-px cursor-pointer rounded-full bg-primary-100 hover:bg-white hover:text-primary-100 transition-all">
        2
      </li>
      <li onClick={() => showContent("BENJI")} className="border px-2 py-px cursor-pointer rounded-full bg-primary-100 hover:bg-white hover:text-primary-100 transition-all">
        3
      </li>
    </ul>
  );
}
