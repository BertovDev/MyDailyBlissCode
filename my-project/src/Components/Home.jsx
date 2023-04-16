import React, { useEffect, useState } from "react";
import SOTDMain from "./SOTD/SOTDMain";
import SOTDFooter from "./SOTD/SOTDFooter";
import Controls from "./Controls";
import StuffSection from "./StuffContent/StuffSection";
import Benji from "./Benji";

export default function Home() {
  return (
    <>
      <main className=" md:flex h-full md:flex-col my-4 lg:my-0 ml-px md:mt-3 lg:w-full">
        <SOTDMain />
        <StuffSection />
        <Benji />
        {/* <SOTDFooter /> */}
      </main>
      <Controls />
    </>
  );
}
