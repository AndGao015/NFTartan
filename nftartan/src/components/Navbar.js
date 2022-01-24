import { useState } from "react";
import { MenuItems } from "./MenuItems";
import "../styles/Navbar.css";

const Navbar = () => {
  const [publicKey, setPublicKey] = useState();

  const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
  };

  const connectPhantom = async () => {
    try {
      const resp = await window.solana.connect();
      setPublicKey(resp.publicKey.toString());
    } catch (err) {
      console.log(err.message);
    }
  };

  const Connect = () => {
    if (window.solana && window.solana.isConnected) {
      return (
        <div
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Trebuchet MS",
            textAlign: "right",
          }}
        >
          For testing purposes
          <h3>{window.solana.publicKey.toString()}</h3>
        </div>
      );
    } else {
      return (
        <button onClick={connectPhantom} className="navbar-connect-button">
          Connect Phantom Wallet
        </button>
      );
    }
  };

  return (
    <div className="NavbarItems">
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Connect />
    </div>
  );
};

export default Navbar;
