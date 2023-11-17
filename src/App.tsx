import classes from "./App.module.scss";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Info from "./pages/info";
import CV from "./pages/cv";
import Publications from "./pages/publications";
import NavBar from "./components/navBar/NavBar";
import Title from "./components/title/Title";

function App() {
  const location = useLocation();
  const [selected, setSelected] = useState("/");

  const renderTitleName = () => {
    switch (selected) {
      case "/":
        return "Info";

      case "/cv":
        return "CV";

      default:
        return "Publications";
    }
  };

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div className={classes.App}>
      <NavBar selected={selected} />
      <div className={classes.title}>
        <Title
          text={renderTitleName()}
          color="dark"
          fontSize={window.innerWidth < 900 ? "medium" : "large"}
          fontWeight="bold"
        />
      </div>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </div>
  );
}

export default App;
