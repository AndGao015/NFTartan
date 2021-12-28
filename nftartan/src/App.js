import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Display from "./pages/Display";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [switchPage, setSwitch] = useState(false)
  let ActivePage = null
  if (switchPage) {
    ActivePage = <LandingPage />
  } else {
    ActivePage = <Display />
  }

  return (
    <div>
      {/* using React Helmet Library to set placeholder background color */}
      <Helmet>
        <style>{"body { background-color: #212121; }"}</style>
      </Helmet>

      <div className="navbar-top">
        <Navbar />
      </div>

      <button onClick={() => setSwitch(!switchPage)}>
        click me to switch page
      </button>

      {ActivePage}
      {/* <Display /> */}
    </div>
  );
}

export default App;
