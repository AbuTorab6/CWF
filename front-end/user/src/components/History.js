import React, { Fragment } from "react";

const History = () => {
  return (
    <Fragment>
      <section className="history-section">
        <div className="row">
          <h2>Our Legacy</h2>
          <p className="history-des">
            5 years of accumulated experience within the machinery industry and,
            other supporting and relative industries coupled with pioneering
            spirit and a quest for comprehension and growth – are what have
            brought Quadir Group to where it is today. We are still looking for
            more opportune industries in the country. Our history is outlined
            below-
          </p>

          <div className="timeline-container">
            <div className="timeline">
              <ul>
                <li>
                  <div class="timeline-content">
                    <h3 class="date">
                      Date: 17<sup>th</sup> July, 2017
                    </h3>
                    <p>Event: Easy Tech Lifts & Escalators Ltd</p>
                  </div>
                </li>
                <li>
                  <div class="timeline-content">
                    <h3 class="date">
                      Date: 05<sup>th</sup> September, 2018
                    </h3>
                    <p>Event: Horchoki Agro International</p>
                  </div>
                </li>
                <li>
                  <div class="timeline-content">
                    <h3 class="date">
                      Date: 16<sup>th</sup> July, 2019
                    </h3>
                    <p>Event: East Housing & Construction</p>
                  </div>
                </li>
                <li>
                  <div class="timeline-content">
                    <h3 class="date">
                      Date: 19<sup>th</sup> June, 2023
                    </h3>
                    <p>Event: Crocodile Wildlife Park</p>
                  </div>
                </li>
                <li>
                  <div class="timeline-content">
                    <h3 class="date">Date: To Be Announced</h3>
                    <p>Event: Q Company</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default History;
