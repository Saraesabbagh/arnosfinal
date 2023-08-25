import React, { useEffect, useState } from "react";
import { Navbar } from "../atomic/Navbar";
import "./Homepage.css";
import axios from "axios";

function Homepage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const config = {
      auth: {
        username: process.env.REACT_APP_CLOUDINARY_API_KEY,
        password: process.env.REACT_APP_CLOUDINARY_SECRET_KEY,
      },
    };

    // Fetch image data from Cloudinary API
    axios
      .get(process.env.REACT_APP_CLOUDINARY_BASE_URL, config)
      .then((response) => {
        setImages(response.data.resources);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  console.log(images);

  return (
    <div>
      <Navbar />
      <section class="hero">
        <div class="hero-content">
          <div class="hero-title-container">
            <h1 class="hero-title">Friends of Arnos Park</h1>
          </div>
        </div>
      </section>
      <section class="main-page-section">
        <div class="main-page-content">
          <div class="subheading-container">
            <h2>Welcome to the Friends of Arnos Park Community website</h2>
            <p class="subheading-container">
              A hardworking group of volunteers who seek to make the park a
              place for everyone to enjoy and share together.
            </p>
          </div>
          <div class="grey-background-container">
            <div class="icon-container-section">
              <div class="row icon-container">
                <div class="col-md-4">
                  <div class="apiary">
                    <img
                      src={require("../images/beeicon.png")}
                      alt="bees"
                      class="img-fluid icon-image"
                    />
                    <p>Apiary</p>
                  </div>
                  <div class="growing-garden">
                    <img
                      src={require("../images/vegpatch.png")}
                      alt="growing icon"
                      class="img-fluid icon-image"
                    />
                    <p>Growing Garden</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="Tennis">
                    <img
                      src={require("../images/tennis.png")}
                      alt="tennis"
                      class="img-fluid icon-image"
                    />
                    <p>Tennis Courts</p>
                  </div>
                  <div class="play-ground">
                    <img
                      src={require("../images/playground.png")}
                      alt="playground icon"
                      class="img-fluid icon-image"
                    />
                    <p>Playground</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="Orchard">
                    <img
                      src={require("../images/apple.png")}
                      alt="applie"
                      class="img-fluid icon-image"
                    />
                    <p>Orchard</p>
                  </div>
                  <div class="Orchard">
                    <img
                      src={require("../images/calendar.png")}
                      alt="calendar"
                      class="img-fluid icon-image"
                    />
                    <p>Free Events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="container mb-2 mt-5" id="first-row-container">
            <div class="row" id="first-row-dark-green">
              <div class="col-md-6">
                <h2 class="mb-3 mt-3 row-title">About</h2>
                <p class="row-text">
                  <p>
                    Find out about what the committee gets up to and about the
                    rich history of the park
                  </p>
                </p>
                <div class="mt-5 mb-5">
                  <a
                    href="about.html"
                    title="Go to About Page"
                    class="primary-link primary-link-darkgreen"
                  >
                    Go to About
                  </a>
                </div>
              </div>
              <div class="col-md-6 row-image">
                <img
                  width="600"
                  src={require("../images/mistyarnospark.jpeg")}
                  alt="mistyarnospark"
                  class="img-fluid row mt-3 mb-4 dark-green-row-image"
                />
              </div>
            </div>
          </div>
          <hr />
          <div class="container mb-2">
            <div class="row" id="light-green-row">
              <div class="col-md-6 mt-2 mb-3">
                <h2 class="mb-3 row-title">Events</h2>
                <p class="row-text">
                  Find out about upcoming events at the park
                </p>
                <div class="mt-5 mb-5">
                  <a
                    href="/events.html"
                    title="go to events"
                    class="primary-link  primary-link-lightgreen"
                  >
                    Go to Events
                  </a>
                </div>
              </div>
              <div class="col-md-6 row-image">
                <img
                  width="500"
                  height="auto"
                  src={require("../images/snowcarrols.jpeg")}
                  alt="halloween group"
                  class="img-fluid row mt-3 mb-0 halloween-image"
                />
              </div>
            </div>
          </div>
          <hr />
          <div class="container mb-2 mt-2">
            <div class="row" id="third-row-dark-green">
              <div class="col-md-6">
                <h2 class="mb-3 mt-3 row-title">Gallery</h2>
                <p class="row-text">
                  Have a look at our Gallery to see all the fun that's been had
                  at past events!
                </p>

                <div class="mt-5 mb-5">
                  <a
                    href="gallery.html"
                    title="Go to gallery"
                    class="primary-link primary-link-darkgreen"
                  >
                    Go to Gallery
                  </a>
                </div>
              </div>
              <div class="col-md-6 row-image">
                <img
                  width="500"
                  height="auto"
                  src={require("../images/DawnLimbertPainting.jpeg")}
                  alt="DawnLimbertPainting"
                  class="img-fluid row mt-3 mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Homepage;
