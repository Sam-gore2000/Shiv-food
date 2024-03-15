import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Success from "./page/Success";
import Error from "./page/Error";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Error />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;