import React from "react";
import { Navbar } from "../atomic/Navbar";
import "./Donatepage.css";
import { auctionItemsUrls } from "../../constants";

const Donatepage = () => {
  return (
    <div>
      <Navbar />
      <section className="donate-hero">
        <div class="hero-content">
          <div class="hero-title-container">
            <h1 class="hero-title">Donate to the park</h1>
            <h2 class="donate-subtitle">Click on the button below to donate</h2>
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
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
        </div>
      </section>
      <section class="bidding-section">
        <section>
          <h2>Summer Picnic Auction Items</h2>
          <h3>
            Have a look at the amazing offers going up for silent auction at our
            summer fair. Items that don't meet their reserve on the day will be
            available to bid for through here! Get your bids in now! Deadline
            Saturday 2/9/2023!
          </h3>

          <div class="contact-cards-container">
            <div class="contact-card">
              <span class="contact-card-text">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://facebook.com/FriendsofArnosParkLondon"
                >
                  Submit your bid to our facebook page
                </a>
              </span>
            </div>
            <div class="contact-card">
              <span class="contact-card-text">
                <a href="mailto:friendsofarnospark@hotmail.co.uk">
                  Submit your bid via email
                </a>
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <h4>
              To submit please add the name of the iteam, Your full name, a
              contact number to let you know if you win and the price you'd like
              to bid
            </h4>
            <section class="auction-listings">
              {auctionItemsUrls.map((photo, index) => (
                <img
                  src={photo}
                  alt={`Photo ${index}`}
                  key={index}
                  style={{ width: "400px", height: "auto", margin: "10px" }}
                />
              ))}
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Donatepage;
