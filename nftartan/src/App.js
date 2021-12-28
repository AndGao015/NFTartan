import React from "react";
import Navbar from "./components/Navbar";
import Display from "./pages/Display";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div>
      {/* using React Helmet Library to set placeholder background color */}
      <Helmet>
        <style>{"body { background-color: #212121; }"}</style>
      </Helmet>

      <div className="navbar-top">
        <Navbar />
      </div>
      <LandingPage />
      {/* <Display /> */}
    </div>
  );
}

export default App;
