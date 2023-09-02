import React, { Fragment } from "react";

import owner from "../asset/image/owner.png";

const Proprietor = () => {
  return (
    <Fragment>
      <section className="proprietor-section">
        <div className="row">
          <div className="proprietor-grid">
            <div className="col">
              <div className="proprietor-image">
                {" "}
                <img
                  className="proprietor-img"
                  src={owner}
                  alt="missionPhoto"
                />{" "}
              </div>
            </div>
            <div className="col right">
              <div className="proprietor-des">
                <h3>
                  "At Crocodile Wildlife Park, we've carved a legacy of
                  excellence and aspiration. Our dedication to crocodile farming
                  and hospitality sets the stage for an unparalleled adventure.
                  Come, embrace the art of finesse and ambition in the realm of
                  crocodiles and luxury."
                </h3>
                <p className="proprietor-name">Talal MD. Tahsinul Quadir</p>
                <p className="proprietor-desi">Proprietor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Proprietor;
