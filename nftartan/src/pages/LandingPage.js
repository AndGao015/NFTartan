import { useState } from "react";
import Model from "../components/Model";
import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [address, setAddress] = useState("enter wallet address here");

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      window.alert(`entered address is ${address}`);
    }
  };

  const changeAddressHandler = (event) => {
    setAddress(event.target.value);
  };

  const focusHandler = (event) => {
    if (address === "enter wallet address here") {
      setAddress("");
    }
  };

  const focusOutHandler = (event) => {
    if (address === "") {
      setAddress("enter wallet address here");
    }
  };

  return (
    <>
    <div className="landing-container">
      <Model className="model" />
      <div className="landing-contents">
        <h3 className="landing-title">
          Curate and showcase your NFTs to your friends with just one click.
        </h3>
        <input
          type="text"
          className={`landing-input ${
            address === "enter wallet address here" ? "empty" : ""
          }`}
          value={address}
          onFocus={focusHandler}
          onBlur={focusOutHandler}
          onChange={changeAddressHandler}
          onKeyDown={enterHandler}
        />
      </div>
    </div>
    </>
  );
};

export default LandingPage;
