import { useState } from "react";
import Model from "../components/Model";
import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <Model className="model" />
        <div className="landing-contents">
          <h3 className="landing-title">
            Curate and showcase your NFTs to your friends with just one click.
          </h3>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
