import React, { Fragment } from "react";

const ContactForm = () => {
  return (
    <Fragment>
      <section className="contact-form-section">
        <div className="row">
          <h2>Get In Touch</h2>
          <div className="">
            <form className="myForm">
              <div className="contact-form-grid">
                <div className="contact-name contact-common">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="from_name"
                    name="from_fname"
                    placeholder="Type your first name here"
                  />
                </div>
                <div className="contact-name contact-common">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="from_name"
                    name="from_lname"
                    placeholder="Type your last name here"
                  />
                </div>
                <div className="contact-name contact-common">
                  <label>Email </label>
                  <input
                    type="text"
                    className="from_name"
                    name="email"
                    placeholder="Type your email here"
                  />
                </div>
                <div className="contact-name contact-common">
                  <label>Phone </label>
                  <input
                    type="text"
                    className="from_name"
                    name="phone"
                    placeholder="Type your phone number here"
                  />
                </div>
              </div>
              <div className="contact-msg contact-common">
                <label className="textarea-lebel">Massage ....</label>
                <textarea
                  className="message"
                  name="message"
                  placeholder="Type your message here ..........."
                />
              </div>
              <button>Submit Massage</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactForm;
