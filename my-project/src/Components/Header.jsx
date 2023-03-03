import React from "react";

function chooseImage() {
  if (window.innerWidth > 1024) return "./public/Component.svg";
  return "./public/ComponentMobile.png";
}

export default function Header() {
  return (
    <div className="flex flex-col ml-3 w-full">
      <img className=" xs:ml-auto" src={chooseImage()} alt="" />
      <p className="text-md tracking-tighter underline underline-offset-2 font-mono text-primary">
        I know is trash but fun to me I guess
      </p>
    </div>
  );
}
