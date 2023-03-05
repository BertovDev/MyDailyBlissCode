import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div
      className="text-white box-border h-screen bg-black w-full overflow-x-hidden p-2
    flex flex-col lg:flex-row lg:overflow-y-hidden lg:px-4 lg:pr-6"
    >
      <Header />
      <Home />
    </div>
  );
}

export default App;
