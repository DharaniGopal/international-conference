import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import Routes from "./router/Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router basename="/">
        <Routes />
      </Router>
    </>
  );
};

export default App;
