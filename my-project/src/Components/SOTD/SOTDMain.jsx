import React from "react";
import SOTDFooter from "./SOTDFooter";
import SOTDHeader from "./SOTDHeader";
import YoutubeEmbed from "./YoutubeEmbed";

export default function SOTDMain() {
  return (
    <section className="flex-col h-full hidden" id="SOTD">
      <SOTDHeader />
      <YoutubeEmbed />
      <SOTDFooter />
    </section>
  );
}
