import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="text-white box-border h-screen bg-black w-full overflow-x-hidden px-2 py-2">
      <Header />
      <Home />
    </div>
  );
}

export default App;
