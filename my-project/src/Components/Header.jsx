import React from "react";

function chooseImage() {
  if (window.innerWidth > 1024) return "./public/Component.svg";
  return "./public/ComponentMobile.png";
}

export default function Header() {
  return (
    <div className="flex w-full">
      <img className="ml-3 xs:ml-auto" src={chooseImage()} alt="" />
    </div>
  );
}
