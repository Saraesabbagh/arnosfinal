/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Navbar } from "../atomic/Navbar";
import "./Gallerypage.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { galleryImageUrls } from "../../constants";

export const Gallerypage = () => {
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   fetchPhotos();
  // }, []);

  // const fetchPhotos = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://graph.facebook.com/v17.0/450693995058242/photos?fields=source&limit=100&access_token=EAAHJyONfHZBQBAE8FjvcHQ4N2vkqKRmmvVGUHwjHMWXiqPZCWZADuRZBOFTVyhi30QG3zQnQe2cilZCdmZArzrVs70laWWWammgqfI1vxSHi7ZC428pBq8p7DAalsbii0gWNfg3DZBDIHa3lmZB7GrOMJRgvFE3aWm5w7xgVychGcuvxy6Y2HXlWprdLqDC7k5kS2m2rHDCXSstruZBAJZAk9zL4NJIZA9cug68ZD"
  //     );

  //     const photosData = response.data?.data;
  //     setPhotos(photosData || []);
  //   } catch (error) {
  //     console.error("Error fetching photos:", error);
  //   }
  // };

  return (
    <div>
      <Navbar />
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <div className="gallery-hero-title-container">
            <h1 className="gallery-hero-title">Gallery</h1>
          </div>
        </div>
      </section>
      <section className="events-poster">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {galleryImageUrls.map((photo, index) => (
            <img
              src={photo}
              alt={`Photo ${index}`}
              key={index}
              style={{ width: "200px", height: "auto", margin: "10px" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
