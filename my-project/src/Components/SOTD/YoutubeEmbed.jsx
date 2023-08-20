import React from "react";

export default function YoutubeEmbed() {
  const embededUrlCode = "mEVik1nJb68";

  return (
    <div
      className="my-5 h-full rounded-xl md:mx-1
    lg:w-11/12 lg:h-full lg:flex lg:items-center lg:justify-center lg:py-3 bg-gradient-to-r from-primary-100 to-primary-150"
    >
      <iframe
        className="w-full h-full p-5 lg:p-1 lg:px-4 outline-none"
        src={"https://www.youtube.com/embed/" + embededUrlCode}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
