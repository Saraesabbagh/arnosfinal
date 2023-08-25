import React, { useEffect, useState } from "react";
import { Navbar } from "../atomic/Navbar";
import "./Activitypage.css";

import { homeEdUrls } from "../../constants";

function Activitypage() {
  return (
    <div>
      <Navbar />
      <section class="activity-hero">
        <div class="activity-hero-content">
          <div class="activity-hero-title-container">
            <h1 class="activity-hero-title">Activities</h1>
          </div>
        </div>
      </section>
      <section class="main-page-section">
        <div class="subheading-container">
          <h2>Regular Activites in the park</h2>
          <p class="subheading-container"></p>
        </div>

        <hr />
        <div class="container mb-2 mt-5" id="first-row-container">
          <div class="row" id="first-row-dark-green">
            <div class="col-md-6">
              <h2 class="mb-3 mt-3 row-title">Home Education Group</h2>
              <p class="row-text">
                <p>
                  Home education group once a week in the growing space at Arnos
                  Park. This is a voluntary group running most Tuesday
                  afternoons around 1pm -4.30pm, Esther mother of one and
                  Danielle mother of three, open up the space for children of
                  all ages to get together, along with like minded thinking
                  Mothers and Fathers. This is to enable our children to have
                  the opportunity to grow and learn within nature together with
                  their peers and family. We welcome new families, but ask for
                  proactive Mothers and Fathers that want to be involved in
                  their child’s and own learning, by investing time within the
                  space.
                  <br />
                  <br />
                  Each week varies due to season, jobs that need doing,
                  resources and group agreement. Often we will do jobs in the
                  growing space, such as feeding, preparing soil, planting,
                  tidying, clearing spaces etc… On average each adult is asked
                  to help for 1 hour, whilst in the space with their child. This
                  is to lead as an example to our children and develop our
                  skills as adults along with our children about growing,
                  foraging, herbal remedies etc…. Depending on the season, we
                  may do a session on planted or harvested vegetables, herbs or
                  fruit. For example one week we talked about Mullien, what it
                  looks like, how to identify, what it looks and smells like
                  dried as a tea and how it helps the body. Then an old folk
                  story was read to the children about Mullien, whilst they
                  drank a homemade Mullien tea.
                  <br />
                  <br />
                  During the time the children aged 0-12 (but not limited) play
                  and learn together, playing and exploring the space, running
                  free in nature. Our aim to to get back to understanding and
                  connecting with nature, to respect the land and to listen to
                  the wealth of information, magic and love mother earth gives
                  us. If you are interested in joining us, there is a Whatsup
                  group, which lets everyone know what is happening from week to
                  week, please email me on 80s.esther@gmail.com with any queries
                  about joining our group.
                </p>
              </p>
              <div class="mt-5 mb-5">
                <a
                  href="mailto:80s.esther@gmail.com"
                  title="Go to About Page"
                  class="primary-link primary-link-darkgreen"
                >
                  Send Us an email
                </a>
              </div>
            </div>

            <div class="col-md-6 row-image">
              <img
                width="600"
                src={require("../images/lanterns.jpeg")}
                alt="mistyarnospark"
                class="img-fluid row mt-3 mb-4 dark-green-row-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="gallery-container">
        <section class="activity-gallery">
          {homeEdUrls.map((photo, index) => (
            <img
              src={photo}
              alt={`Photo ${index}`}
              key={index}
              style={{
                width: "400px",
                height: "auto",
                margin: "10px",
                justifyContent: "space-evenly",
              }}
            />
          ))}
        </section>
      </section>
    </div>
  );
}
export default Activitypage;
