import React, { Fragment } from "react";

import encounterImg from "../asset/image/encounterImg.jpg";

import Slide from "react-reveal/Slide";

const Encounter = () => {
  return (
    <Fragment>
      <section className="encounter-section">
        <h2>The Encounter</h2>
        <div className="row">
          <div className="encounter-grid">
            <div className="encounter-des">
              <h3>Discover the Thrilling World of Crocodiles:</h3>
              <Slide right>
                <p>
                  Immerse yourself in the captivating realm of crocodiles at our
                  spectacular crocodile farm, exhibition center, and resort.
                  With lush greenery and a diverse range of reptilian
                  inhabitants, we offer an unforgettable experience for nature
                  enthusiasts, adventure seekers, and curious minds of all ages.
                </p>
              </Slide>{" "}
              <br />
              <Slide left>
                <p>
                  Here at Crocodile Wildlife Park, our mission is to enhance
                  crocodile production, promote tourism, and provide an
                  exceptional exhibition experience. While we do not primarily
                  focus on conservation, we are dedicated to the responsible
                  farming of crocodiles and educating our visitors about the
                  process. Our vision is to supply premium quality crocodile
                  skin for the international market, showcasing the sustainable
                  and ethical practices we employ.
                </p>
              </Slide>{" "}
              <br />
              <Slide right>
                <p>
                  As we strive to become one of the largest crocodile farms in
                  the South Asian sub-continent, we also aim to increase tourism
                  to our resort and provide an educational platform for
                  visitors. Learn about the intricacies of crocodile farming,
                  witness the stages of growth and development, and gain
                  insights into the sustainable practices we implement.
                </p>
              </Slide>{" "}
              <br />
              <Slide left>
                <p>
                  With our state-of-the-art facilities, knowledgeable staff, and
                  commitment to excellence, we create an atmosphere where
                  visitors can truly connect with the mesmerizing world of
                  crocodiles. Whether you choose to embark on a thrilling tour,
                  explore our exhibition center, or stay in our luxurious
                  resort, your experience will be filled with wonder, education,
                  and the awe-inspiring presence of these ancient reptiles.
                </p>
              </Slide>{" "}
              <br />
              <Slide right>
                <p>
                  We invite you to join us on this remarkable journey as we
                  continue to make strides in crocodile production, provide a
                  unique exhibition experience, and offer a relaxing retreat in
                  our resort. Discover the allure of crocodiles, witness their
                  majesty firsthand, and learn about the process of crocodile
                  farming at Crocodile Wildlife Park.
                </p>
              </Slide>{" "}
              <br />
            </div>
            <div>
              <div className="encounter-image">
                {" "}
                <img
                  className="encounter-img"
                  src={encounterImg}
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

export default Encounter;
