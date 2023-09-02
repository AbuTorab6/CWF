import React, { Fragment } from "react";

import privateTour from "../asset/image/privateTour.jpg";
import Slide from "react-reveal/Slide";
const OurPark = () => {
  return (
    <Fragment>
      <section className="ourPark-section">
        <div className="row">
          <h2>Our Park</h2>
          <div className="ourPark-grid">
            <div className="col">
              <div className="ourPark-image">
                {" "}
                <img className="ourPark-img" src={privateTour} alt="" />{" "}
              </div>
            </div>
            <div className="col">
              <div className="des">
                <Slide right>
                  <p>
                    Nestled amidst [location]'s breathtaking natural landscapes,
                    our Crocodile Wildlife Park offers a sanctuary for both
                    visitors and crocodiles alike. With carefully designed
                    habitats that replicate their natural environments, we
                    provide a safe and enriching space for these majestic
                    reptiles to thrive.
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurPark;
