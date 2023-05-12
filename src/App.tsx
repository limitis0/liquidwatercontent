import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Info from "./pages/info";
import CV from "./pages/cv";
import Publications from "./pages/publications";
import NavBar from "./components/navBar/NavBar";

function App() {
  const location = useLocation();
  const [selected, setSelected] = useState("/");

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div className="App">
      <NavBar selected={selected} />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </div>
  );
}

export default App;
