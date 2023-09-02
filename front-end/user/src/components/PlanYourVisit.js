import React, { Fragment } from "react";

import Slide from "react-reveal/Slide";

import privateTour from "../asset/image/privateTour.jpg";
import Exhibition from "../asset/image/Exhibition.jpg";
import villa from "../asset/image/villa.jpg";

const PlanYourVisit = () => {
  return (
    <Fragment>
      <section className="planVisit-section">
        <div className="row">
          <h2>Plan Your Visit</h2>
          <div className="planVisit-grid">
            <div className="col">
              <div className="planVisit-image">
                {" "}
                <img className="planVisit-img" src={privateTour} alt="" />{" "}
              </div>
              <div className="des">
                <h3>Park Tour:</h3>
                <Slide right>
                  <p>
                    Immerse yourself in the captivating world of crocodiles with
                    our comprehensive tour package. This option grants you
                    access to the entire park and farm, where you can explore a
                    wide range of exhibits, witness thrilling demonstrations,
                    and learn about the fascinating lives of crocodiles. Take a
                    guided tour through diverse habitats, interact with our
                    knowledgeable staff, and create unforgettable memories.
                  </p>
                </Slide>
                <div className="btn-grid">
                  <button className="planVisitBtn bookBtn">Book Now</button>
                  <button className="planVisitBtn learnBtn">Learn More</button>
                </div>
              </div>
            </div>

            {/* small screen */}
            {/* <div className="col small-screen small-screen-margin">
              <div className="planVisit-image">
                {" "}
                <img className="planVisit-img" src={Exhibition} alt="" />{" "}
              </div>
            </div>
            <div className="col small-screen">
              <div className="des">
                <h3>Exhibition Center:</h3>
                <Slide right>
                  <p>
                    For those seeking a focused experience, our Exhibition
                    package provides access to our world-class exhibition
                    center. Discover the wonders of crocodiles through engaging
                    displays, interactive exhibits, and informative
                    demonstrations. Please note that this package does not
                    include access to the park or the farm itself.
                  </p>
                </Slide>
                <button className="planVisitBtn bookBtn">Book Now</button>
                <button className="planVisitBtn learnBtn">Learn More</button>
              </div>
            </div> */}

            <div className="col ">
              <div className="planVisit-image">
                {" "}
                <img className="planVisit-img" src={Exhibition} alt="" />{" "}
              </div>
              <div className="des">
                <h3>Exhibition Center:</h3>
                <Slide right>
                  <p>
                    For those seeking a focused experience, our Exhibition
                    package provides access to our world-class exhibition
                    center. Discover the wonders of crocodiles through engaging
                    displays, interactive exhibits, and informative
                    demonstrations. Please note that this package does not
                    include access to the park or the farm itself.
                  </p>
                </Slide>
                <div className="btn-grid">
                  <button className="planVisitBtn bookBtn">Book Now</button>
                  <button className="planVisitBtn learnBtn">Learn More</button>
                </div>
              </div>
            </div>

            {/* <div className="col small-screen-margin">
              <div className="planVisit-image">
                {" "}
                <img className="planVisit-img" src={villa} alt="" />{" "}
              </div>
            </div> */}
            {/* <div className="col">
              <div className="des">
                <h3>Stay with Us:</h3>
                <Slide right>
                  <p>
                    Indulge in the ultimate crocodile experience by booking a
                    villa in our luxurious resort. In addition to the benefits
                    included in the Tour and Exhibition packages, you'll enjoy
                    the comfort and exclusivity of our accommodation. Relax in
                    well-appointed villas, surrounded by picturesque views and
                    tranquil surroundings. Immerse yourself in the serenity of
                    nature while enjoying access to the park, the farm, and all
                    their offerings.
                  </p>
                </Slide>
                <button className="planVisitBtn bookBtn">Book Now</button>
                <button className="planVisitBtn learnBtn">Learn More</button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PlanYourVisit;
