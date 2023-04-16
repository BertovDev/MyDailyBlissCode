import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

function chooseImage() {
  if (window.innerWidth > 1024) return "./Component.svg";
  return "./ComponentMobile.png";
}

function headerAnimation(boolean) {
  gsap.to(".header-img", {
    duration: 2,
    ease: "none",
    y: "+=500", //move each box 500px to right
    modifiers: {
      y: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
    },
    repeat: -1
  });
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
    <div className="flex overflow-y-hidden flex-col ml-3 w-full lg:w-1/6 lg:h-full lg:justify-start lg:items-center gap-0">
      <img className="header-img xs:ml-auto h-full" src={img}
        // onMouseOver={() => headerAnimation(true)}
        // onMouseLeave={() => headerAnimation(false)}
      />
      {/* <p className="cursor-pointer text-md opacity-90 tracking-tighter underline underline-offset-2 font-mono text-primary md:text-xl lg:text-center lg:text-xl hover:opacity-100 active:opacity-100 transition-all">
        Daily cool things to me
      </p> */}
    </div>
  );
}
