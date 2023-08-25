import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top topnav">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={require("../images/arnosparklogo.png")}
                alt="ArnosPark logo"
                width="100"
                height="auto"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="/">
                  Home
                </a>

                <a
                  className="nav-link"
                  title="About Park"
                  href="https://main--friendsofarnospark.netlify.app/about"
                >
                  About
                </a>
                <a className="nav-link" title="Park events" href="/events">
                  Events
                </a>
                <a className="nav-link" title="Park Gallery" href="/gallery">
                  Gallery
                </a>
                <a
                  className="nav-link"
                  title="Contact committee"
                  href="/contact"
                >
                  Contact
                </a>
                <a className="nav-link" title="Donate" href="/donate">
                  Donate
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <div className="topnav">
            <ul>
                <li id='navlogo'>
                    <a href="/">
                    <img
                        width="100"
                        src={require("../images/arnosparklogo.png")}
                        alt="mistyarnospark"
                        className=""
                    />
                    </a>
                </li>
                <li><a href ="/">Home</a></li>
                <li><a href ="/about"> About</a></li>
                <li><a href ="/gallery"> Gallery</a></li>
                <li><a href ="/events"> Events</a></li>
                <li><a href ="/contact"> Contact</a></li>
            </ul>
        </div> */}
    </div>
  );
};
