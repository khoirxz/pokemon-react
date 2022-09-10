import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Single } from "./pages";

function App() {
  // console.log(pokelist); done
  return (
    <BrowserRouter>
      <div className="text-white bg-black min-h-screen pb-5">
        <div className="py-10">
          <h1 className="text-center font-bold text-3xl">Pokemon database</h1>
        </div>
        <div className="max-w-5xl backdrop-blur-sm bg-white/10 my-8 mx-auto p-4 shadow-lg rounded-md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Single />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
