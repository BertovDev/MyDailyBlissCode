import React, { useEffect, useState } from "react";

function chooseImage() {
  if (window.innerWidth > 1024) return "./Component.svg";
  return "./ComponentMobile.png";
}

export default function Header() {
  const [img, setImg] = useState(chooseImage());

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setImg("./public/Component.svg");
      } else {
        setImg("./public/ComponentMobile.png");
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="flex flex-col ml-3 w-full lg:w-1/6 lg:h-full lg:justify-start lg:items-center gap-0">
      <img className="xs:ml-auto h-full" src={img} />
      {/* <p className="cursor-pointer text-md opacity-90 tracking-tighter underline underline-offset-2 font-mono text-primary md:text-xl lg:text-center lg:text-xl hover:opacity-100 active:opacity-100 transition-all">
        Daily cool things to me
      </p> */}
    </div>
  );
}
