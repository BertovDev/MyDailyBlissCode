import React, { useEffect } from "react";
import YoutubeEmbed from "./SOTD/YoutubeEmbed";
import SOTDHeader from "./SOTD/SOTDHeader";
import SOTDFooter from "./SOTD/SOTDFooter";

export default function Home() {
  return (
    <section className="mt-4 ml-px md:mt-3 lg:mt-0 lg:w-full">
      <SOTDHeader />
      <YoutubeEmbed />
      <SOTDFooter />
    </section>
  );
}
