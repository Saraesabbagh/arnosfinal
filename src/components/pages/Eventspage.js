import React from "react";
import { Navbar } from "../atomic/Navbar";
import "./Eventspage.css";

export const Eventspage = () => {
  return (
    <div>
      <Navbar />
      <section class="events-hero">
        <div class="events-hero-content">
          <div class="events-hero-title-container">
            <h1 class="events-hero-title">Events</h1>
          </div>
        </div>
      </section>
      <section class="events-poster">
        <img
          src={require("../images/parkevents.jpeg")}
          alt="park events list"
          class="img-fluid row mt-3 mb-4 "
        />
      </section>
    </div>
  );
};
