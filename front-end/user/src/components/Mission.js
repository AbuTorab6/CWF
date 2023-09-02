import React, { Fragment } from "react";

import mission from "../asset/image/mission.jpg";
import privateTour from "../asset/image/privateTour.jpg";

import Slide from "react-reveal/Slide";

const Mission = () => {
  return (
    <Fragment>
      <section className="mission-section">
        <h2>Mission</h2>
        <div className="row">
          <div className="mission-grid">
            <div className="mission-des">
              <Slide right>
                <p>
                  Learn about our commitment to conservation and how we work
                  with local communities, researchers, and conservation
                  organizations to protect crocodile populations and their
                  habitats.
                </p>
              </Slide>{" "}
              <br />
              <Slide left></Slide>
            </div>
            <div>
              <div className="mission-image">
                {" "}
                <img
                  className="mission-img"
                  src={privateTour}
                  alt="missionPhoto"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Mission;
