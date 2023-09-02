import React, { Fragment } from "react";

import privateTour from "../asset/image/privateTour.jpg";
import Slide from "react-reveal/Slide";

const Ethical = () => {
  return (
    <Fragment>
      <section className="ourPark-section expartCare-section">
        <div className="row">
          <h2>Ethical and Sustainable Practices</h2>
          <div className="ourPark-grid">
            <div className="col">
              <div className="des">
                <Slide left>
                  <p>
                    As stewards of these incredible animals, we prioritize
                    ethical and sustainable practices. Our crocodile farm
                    operates with utmost care and respect for the well-being of
                    our crocodiles. We adhere to strict guidelines and
                    regulations, ensuring that our operations are
                    environmentally friendly and comply with international
                    standards.
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

export default Ethical;
