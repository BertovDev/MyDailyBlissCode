import React from "react";
import gsap from "gsap";

export default function SOTDHeader() {
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
    " " +
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    date.getFullYear();
  return (
    <div>
      <h1
        className="text-8xl pl-1 font-black mb-2 font-darkerGrote md:text-8xl
        lg:text-[9rem] lg:mb-0 lg:tracking-wide"
      >
        SOTD
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-2 ">
        <div className="w-full opacity-80 tracking-normal ml-2 text-md font-mono md:text-xl lg:text-2xl">
          Song Of The Day
          <div className="group relative inline-block">
            <span className="pl-2 cursor-pointer">🎵, </span>
            <span
              className="hidden lg:inline group-hover:opacity-100 group-active:opacity-100 transition-opacity bg-primary-50 px-1 text-sm text-primary-200 font-mono rounded-md absolute
              -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto w-52 left-8"
            >
              Daily Reminder:{" "}
              <span className="underline underline-offset-2">Be Nice</span>
            </span>
          </div>
          {fullDate}
        </div>
        <div className="group relative inline-block lg:hidden">
          <p className="text-md ml-2 tracking-wide font-mono text-primary lg:text-2xl lg:inline-block underline underline-offset-2 cursor-pointer">
            Touch me
        </p>
          <span
            className="group-hover:opacity-100 group-active:opacity-100 transition-opacity bg-primary-50 px-1 text-sm text-primary-200 font-mono rounded-md absolute
              -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto w-52 left-52 bottom-1"
          >
            Daily Reminder:{" "}
            <span className="underline underline-offset-2">Be Nice</span>
          </span>
        </div>
      </div>
    </div>
  );
}
