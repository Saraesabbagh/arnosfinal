import React from "react";
import { Navbar } from "../atomic/Navbar";
import "./Donatepage.css";

const Donatepage = () => {
  return (
    <div>
      <Navbar />
      <section className="donate-hero"></section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <p>Placeholder text</p>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=U3W76M6Q5Q7VS"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={require("../images/paypal-btn.png")}
            style={{ width: "400px" }}
            alt="Donate"
          />
        </a>
      </section>
    </div>
  );
};

export default Donatepage;
