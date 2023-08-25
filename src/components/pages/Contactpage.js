import React from "react";
import { Navbar } from "../atomic/Navbar";
import "./Contactpage.css";

export const Contactpage = () => {
  return (
    <div>
      <Navbar />
      <section class="contact-hero">
        <div class="contact-hero-content">
          <div class="contact-hero-title-container">
            <h1 class="contact-hero-title">Contact us</h1>
          </div>
        </div>
      </section>
      <section class="contact-container">
        <div class="contact-container">
          <h2>Get in touch!</h2>
          <p>
            If you have an idea for an event, or would like to comment on any
            aspect of the park and its usage, please feel free to contact us
            through our facebook page or by using the email address:
          </p>
          <div class="contact-methods">
            <div class="contact-cards-container">
              <div class="contact-card">
                <span class="contact-card-text">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://facebook.com/FriendsofArnosParkLondon"
                  >
                    Go to our Facebook page
                  </a>
                </span>
              </div>
              <div class="contact-card">
                <span class="contact-card-text">
                  <a href="mailto:friendsofarnospark@hotmail.co.uk">
                    Send us an email
                  </a>
                </span>
              </div>
            </div>
          </div>
          <p>
            Get in touch and help us fulfil our aims! All skill levels welcomed!
          </p>
        </div>
      </section>
    </div>
  );
};
