import React, { Fragment, useState } from "react";

import "../asset/css/custom.css";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";

import { BsPlayCircle } from "react-icons/bs";

import heroImg from "../asset/image/HeroImg.png";

const Hero = () => {
  var [play, setPlay] = useState(false);

  var showModal = () => {
    setPlay(true);
  };

  var hideModal = () => {
    setPlay(false);
  };

  return (
    <Fragment>
      <section className="hero-section">
        <div className="row">
          <Modal show={play} onHide={hideModal}>
            <Modal.Body>
              <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
                <LoadingSpinner />
              </Player>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="modal-btn"
                variant="secondary"
                onClick={hideModal}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="hero-flex">
            <div className="hero-grid">
              <div className="col">
                <div className="hero-textbox">
                  <h1>Welcome to our Crocodile Wildlife Park!</h1>
                  {/* <p className="hero-description">
            <b>Discover the Thrilling World of Crocodiles:</b><br/>
            Immerse yourself in the captivating realm of crocodiles at our spectacular wildlife park with lush greenery and a diverse range of reptilian inhabitants, we offer an unforgettable experience for nature enthusiasts, adventure seekers, and curious minds of all ages.
        </p> */}
                  <p className="hero-button">
                    <button className="hero-btn dis">Discover</button>
                    <button className="hero-btn about">About Us</button>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="hero-video">
                  <div className="hero-video-image ">
                    <img className="hero-video-img" src={heroImg} alt="video" />
                    {/* <span onClick={showModal}  className='play-btn'><BsPlayCircle/></span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
