import React, { Fragment } from "react";

import privateTour from "../asset/image/privateTour.jpg";
import Slide from "react-reveal/Slide";

const EducationAware = () => {
  return (
    <Fragment>
      <section className="ourPark-section educationAware-section">
        <div className="row">
          <h2>Education and Awareness</h2>
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
                    We believe in the power of education to inspire change. Our
                    park serves as an educational platform, offering engaging
                    exhibits, guided tours, and interactive activities that
                    showcase the fascinating world of crocodiles. Through
                    immersive experiences, we aim to cultivate a deeper
                    understanding and appreciation for these ancient predators
                    and their critical role in ecosystems.
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

export default EducationAware;
