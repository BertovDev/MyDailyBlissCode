import React from "react";
import SOTDFooter from "./SOTDFooter";
import SOTDHeader from "./SOTDHeader";
import YoutubeEmbed from "./YoutubeEmbed";
export default function SOTDTEST() {
  return (
    <section id="TEST" className="flex-col h-full hidden">
      <div>TEST</div>
      <SOTDHeader />
      <YoutubeEmbed />
      <SOTDFooter />
    </section>
  );
}
