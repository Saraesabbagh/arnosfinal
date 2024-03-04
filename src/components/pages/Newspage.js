import React from "react";
import { Navbar } from "../atomic/Navbar";
import "./Newspage.css";
import PdfList from "../atomic/pdfList";

export const Newspage = () => {
  return (
    <div>
      <Navbar />
      <section class="events-hero">
        <div class="events-hero-content">
          <div class="events-hero-title-container">
            <h1 class="events-hero-title">News</h1>
          </div>
        </div>
      </section>
      <div class="news-center-container">
        <section class="events-poster">
          <h2>Thames Water Works in and around the Park</h2>
          <p>
            Thames Water will be carrying out extensive works that go right
            through our park and the surrounding streets. Below is some quick
            guidance on how park and road users may be affected. Please download
            the street letters for further details.
          </p>
          <img
            src={require("../images/letterpreview.png")}
            alt="letter preview"
            class="img-fluid row mt-3 mb-4 "
            style={{ width: "800px", height: "auto" }}
          />
          <PdfList />
          <img
            src={require("../images/arnosGroveMap.png")}
            alt="arnosGoveMap"
            class="img-fluid row mt-3 mb-4 "
            style={{ width: "800px", height: "auto" }}
          />
          <img
            src={require("../images/BrookdaleMap.png")}
            alt="Brookdalemap"
            class="img-fluid row mt-3 mb-4 "
            style={{ width: "800px", height: "auto" }}
          />
          <img
            src={require("../images/stationRoadMap.png")}
            alt="stationRoadMap"
            class="img-fluid row mt-3 mb-4 "
            style={{ width: "800px", height: "auto" }}
          />
        </section>
      </div>
    </div>
  );
};
