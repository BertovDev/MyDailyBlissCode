import React from "react";

export default function YoutubeEmbed() {
  const embededUrlCode = "7KNoeWe-3Zo";

  return (
    <div
      className="bg-gradient-to-r from-primary-100 to-primary-150 my-5 h-96 rounded-xl md:h-[33rem] md:mx-1
    lg:w-11/12 lg:h-full lg:flex lg:items-center lg:justify-center lg:py-3 shadow-md shadow-primary-100"
    >
      <iframe
        className="w-full h-full p-5 lg:py-5 lg:px-12 outline-none"
        src={"https://www.youtube.com/embed/" + embededUrlCode}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
