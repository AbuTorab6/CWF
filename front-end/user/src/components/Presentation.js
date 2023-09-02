import React, { Fragment } from "react";

const Presentation = () => {
  return (
    <Fragment>
      <section className="presentation-section">
        <div className="row">
          <div className="presentation-grid">
            <div className="col">
              <h2>CONTACT</h2>
              <h4 className="des">NEED HELP? CALL US. </h4>
              <h3>+8801894866501</h3>

              <p className="farm-address">
                <span className="green">FARM’S ADDRESS:</span> WARD-23
                MOUJA-BELTOLI, MYMENSINGH CITY CORPORATION, MYMENSINGH-2200,
                BANGLADESH
              </p>
              <p>
                <span className="green">HEAD OFFICE:</span> HOUSE 884, ROAD 11,
                AVENUE 2, MIRPUR DOHS, DHAKA 1216, BANGLADESH.
              </p>
              {/* <p>
                <span className="green">HOW</span> 30 minutes presentation + Q&A
                via ZOOM
              </p> */}
            </div>
            <div className="col">
              <form className="myForm">
                <div className="presentation-name presentation-common">
                  <label>Name</label>
                  <input
                    type="text"
                    className="from_name"
                    name="from_fname"
                    placeholder="Type your name here"
                  />
                </div>
                <div className="presentation-name presentation-common">
                  <label>Email </label>
                  <input
                    type="text"
                    className="from_name"
                    name="email"
                    placeholder="Type your email here"
                  />
                </div>
                <div className="presentation-name presentation-common">
                  <label>Phone </label>
                  <input
                    type="text"
                    className="from_name"
                    name="phone"
                    placeholder="Type your phone number here"
                  />
                </div>
                <div className="presentation-msg presentation-common">
                  <label className="textarea-lebel">Message</label>
                  <textarea
                    className="message"
                    name="message"
                    placeholder="Type your message here ..........."
                  />
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Presentation;
