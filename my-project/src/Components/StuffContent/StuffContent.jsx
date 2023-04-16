import React from "react";
import { Link } from "react-bootstrap-icons";
export default function StuffContent({ link, title, description }) {
  return (
    <li className="flex gap-y-2 flex-col gap-x-10 mt-5 ml-2 items-start justify-start">
      <a className="flex gap-x-2 items-center font-montserrat text-lg md:text-2xl 2xl:text-3xl font-bold" target="_blank" href={link}>
        {title} <Link />
      </a>
      <p className="pl-1 text-base md:text-lg 2xl:text-xl font-mono opacity-90">{description}.</p>
    </li>
  );
}
