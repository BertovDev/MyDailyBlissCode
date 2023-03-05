import React, { useEffect, useState } from "react";

function chooseImage() {
  if (window.innerWidth > 1024) return "./public/Component.svg";
  return "./public/ComponentMobile.png";
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
      <p className="text-md tracking-tighter underline underline-offset-2 font-mono text-primary md:text-xl lg:text-center lg:text-2xl">
        I know is trash but fun to me I guess
      </p>
    </div>
  );
}
