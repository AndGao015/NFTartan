import React from "react";
import Navbar from "./components/Navbar";
import Display from "./pages/Display";
import LandingPage from "./pages/LandingPage";
import Model from "./components/Model";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

const App = () => {
  return (
    <div>
      {/* using React Helmet Library to set placeholder background color */}
      <Helmet>
        <style>{"body { background-color: #212121; }"}</style>
      </Helmet>
      <Navbar />
      {/* <LandingPage /> */}
      <Display />
    </div>
  );
}

export default App;
