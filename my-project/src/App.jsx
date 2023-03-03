import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="text-white box-border bg-black min-h-screen w-full overflow-x-hidden px-2 py-2">
      <Header />
      <Home />
    </div>
  );
}

export default App;
