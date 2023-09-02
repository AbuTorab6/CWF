import React, { Fragment } from "react";

import privateTour from "../asset/image/privateTour.jpg";
import Slide from "react-reveal/Slide";

const ExpartCare = () => {
  return (
    <Fragment>
      <section className="ourPark-section expartCare-section">
        <div className="row">
          <h2>Expert Care and Conservation</h2>
          <div className="ourPark-grid">
            <div className="col">
              <div className="des">
                <Slide left>
                  <p>
                    Our team of passionate experts consists of experienced
                    herpetologists, wildlife professionals, and dedicated
                    caretakers who prioritize the well-being and conservation of
                    crocodiles. We adhere to the highest standards of animal
                    welfare, implementing responsible breeding programs and
                    participating in important research and conservation
                    initiatives.
                  </p>
                </Slide>
              </div>
            </div>
            <div className="col">
              <div className="ourPark-image">
                {" "}
                <img className="ourPark-img" src={privateTour} alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ExpartCare;
