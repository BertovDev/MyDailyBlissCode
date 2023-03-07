import React from "react";

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
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    date.getFullYear();
  return (
    <>
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
    </>
  );
}
