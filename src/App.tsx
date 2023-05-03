import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Info from "./pages/info";
import CV from "./pages/cv";
import Publications from "./pages/publications";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </div>
  );
}

export default App;
