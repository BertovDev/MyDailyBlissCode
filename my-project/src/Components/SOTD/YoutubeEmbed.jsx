import React from "react";

export default function YoutubeEmbed() {
  const embededUrlCode = "bCDk8OSW3ks";

  return (
    <div
      className="bg-primary-100 my-5 h-96 rounded-xl md:h-[33rem] md:mx-1
    lg:w-full lg:h-[39rem] lg:flex lg:items-center lg:justify-center lg:py-3 shadow-md shadow-primary-100"
    >
      <iframe
        className="w-full h-full aspect-video p-5 outline-none"
        height="315"
        src={"https://www.youtube.com/embed/" + embededUrlCode}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
