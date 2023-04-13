import React, { useEffect, useState } from "react";
import SOTDMain from "./SOTD/SOTDMain";
import SOTDTEST from "./SOTD/SOTDTEST";

const sections = ["SOTD", "TEST"];

export default function Home() {
  function showContent(contentID) {
    const content = document.getElementById(contentID);
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      content.classList.add("flex");
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
    <section className="md:flex md:flex-col md:justify-center h-full mt-4 ml-px md:mt-3 lg:mt-0 lg:w-full">
      <SOTDMain />
      <SOTDTEST />
      <ul className="text-xl lg:absolute flex flex-col gap-4 lg:right-14">
        <li
          onClick={() => showContent("SOTD")}
          className="border px-2 py-px cursor-pointer rounded-full bg-primary-100 hover:bg-white hover:text-primary-100 transition-all"
        >
          1
        </li>
        <li
          onClick={() => showContent("TEST")}
          className="border px-2 py-px cursor-pointer rounded-full bg-primary-100 hover:bg-white hover:text-primary-100 transition-all"
        >
          2
        </li>
        <li className="border px-2 py-px cursor-pointer rounded-full bg-primary-100 hover:bg-white hover:text-primary-100 transition-all">
          3
        </li>
      </ul>
    </section>
  );
}
