import React from "react";
import { Navbar } from "../atomic/Navbar";
import "./Aboutpage.css";
import { aboutUsText } from "../../constants";

export const Aboutpage = () => {
  return (
    <div>
      <Navbar />
      <div class="main-page-container">
        <section class="about-hero">
          <div class="about-hero-title-container">
            <h1 class="about-hero-title m-t=5">About us and the Park</h1>
          </div>
        </section>
      </div>
      <div class="about-overview">
        <h2>About us</h2>
        <p>{aboutUsText} </p>
      </div>
      <div class="grey-background-container">
        <div class="mission-statement-container">
          <h2>Mission Statement</h2>
          <p>
            As a community organisation, the Friends of Arnos Park will work to
            achieve the following Mission Statements:
          </p>

          <div class="row mission-row">
            <div class="col-md-6">
              <p>
                <b>1.</b> Increase biodiversity
              </p>
              <p>
                {" "}
                <b>2.</b> Help maintain the tidiness of the Park
              </p>
              <p>
                <b>3.</b> Develop the area of the old playground
              </p>
            </div>
            <div class="col-md-6">
              <p>
                <b>4.</b> Bring the community together for a common purpose: "To
                Make Your Park a Better Place.""
              </p>
              <p>
                <b>5.</b> Fundraising for improvements
              </p>
            </div>
          </div>
          <p>
            If you would like to help us achieve these aims, please
            <a href="/contact"> contact us.</a>
          </p>
        </div>
      </div>
      <div class="history-container">
        <h2>A Brief History of our Park</h2>
        <img
          // width="300"
          // height="auto"
          src={require("../images/historicalviaduct.jpeg")}
          alt="historicalviaduct"
          class="historicalviaduct"
        />

        <p>
          The area of Arnos Grove was, until the dissolution of the monasteries
          by Henry VIII, owned by the Nuns of Clerkenwell. Formerly known as
          Arnolds and Arno's Grove, the name originated in Armholt, a
          14th-century wood on the western borders of Southgate which became
          part of the Charterhouse estate. In 1551 the Charterhouse wood was
          granted to Sir Thomas and George Tresham. Thomas Colte of Waltham Holy
          Cross (Essex) later held it and in 1584, after his death, his
          daughters and coheirs Catherine and Jane and their husbands, Thomas
          Cave of Baggrave (Leics.) and Nicholas Brookes of London, covenanted
          to convey Arnolds, then consisting of a house and 24 acres, to
          Humphrey Weld, grocer of London. Weld, who was later knighted,
          acquired 13 acres from Robert Cecil in 1610, but died in 1611. His
          son, Sir John Weld (d. 1623), the founder of Weld chapel, bought 150
          acres nearby from William Cecil, earl of Salisbury, in 1614. Sir
          John's widow Frances sold the property in 1645 to Sir William Acton,
          Bt. Acton's daughter and heir married Sir Thomas Whitmore, Bt., whose
          son, Sir William Whitmore, Bt. devised his estates to William
          Whitmore, who was succeeded by his son, Thomas Whitmore, later
          knighted.
        </p>

        <p>
          In 1747 Sir Thomas sold Arnolds to James Colebrook, a London mercer
          who had been acquiring property in Southgate since 1716. His son Sir
          George Colebrook, Bt., sold it in 1762 to Abraham Hume who in 1763
          exchanged some land with the Minchenden estate and in 1766 sold
          Arnolds to Sir William Mayne, Bt., later Lord Newhaven. Mayne conveyed
          the estate in 1775 to James Brown of Lombard Street (London) whence it
          passed in 1777 to Isaac Walker of Cornhill (London).
        </p>

        <p>
          In 1804 Walker was the owner and part occupier of 264 acres. The
          Walkers (of the Taylor Walker brewing family) retained the estate,
          which they increased to over 300 acres by buying Minchenden in 1853
          and Beaver Hall in 1870, until Russell Donnithorne Walker, the last of
          the Walker brothers, sold it in 1918 to Andrew Weir, later Lord
          Inverforth, a shipowner.
        </p>

        <img
          //   width="300"
          //   height="auto"
          src={require("../images/historicalviaductfrombelow.jpeg")}
          alt="historicalviaduct"
          class="img-fluid row  historicalviaductfrombelow"
        />

        <p>
          In 1928 Lord Inverforth sold the house to Northmet Electricity Co.
          (later the Eastern Electricity Board), the southernmost 44 acres to
          Southgate U.D.C. as open space, and the rest to builders. The house
          was subsequently enlarged and encased in red brick - it is now an
          upmarket residential care home called Southgate Beaumont.
        </p>

        <p>
          The Pymmes Brook, named after William Pymme a local landowner between
          1307-1327, flows throughout the length of the park. However, although
          Arnos Park contains some diverse woodland, it is now mostly grassy
          fields. A large brick viaduct of 34 arches carries the Piccadilly line
          beyond Arnos Grove tube station towards Southgate through the western
          end of the park by Waterfall Road. The park contains a large
          playground for children as well as several tennis courts.{" "}
          <a href="https://ldwa.org.uk/ldp/members/show_path.php?menu_type=S&path_name=Pymmes+Brook+Trail">
            The Pymmes Brook Trai
          </a>
          l passes through the park. Also, evidence of a loop of the New River,
          abandoned in the 18th century, can be found within the trees in the
          north side of the park.
        </p>
        <p>
          {" "}
          <b>Sources:</b>
          <ul>
            <li>
              <a href="https://www.british-history.ac.uk/vch/middx/vol5/pp154-161">
                Victoria House History
              </a>
            </li>
            <li> | </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Arnos_Grove">Wikipedia</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
