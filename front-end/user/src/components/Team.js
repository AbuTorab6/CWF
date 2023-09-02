import React, { Fragment } from "react";

import team1 from "../asset/image/team1.png";
import team2 from "../asset/image/team2.png";
import team3 from "../asset/image/team3.png";

import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Team = () => {
  return (
    <Fragment>
      <section className="team-section">
        <div className="row">
          <h2>The Team</h2>

          <div className="team-grid">
            <div className="col">
              <div className="team-image">
                {" "}
                <img className="team-img" src={team1} alt="teammember" />
              </div>
              <h3>Team 1</h3>
              <p>Greer, SC | @bandholz</p>
              <ul>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/Crocodile-Wildlife-Park-116326368162780/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/crocodile__park?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="team-image">
                {" "}
                <img className="team-img" src={team2} alt="teammember" />
              </div>
              <h3>Team 2</h3>
              <p>Greer, SC | @bandholz</p>
              <ul>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/Crocodile-Wildlife-Park-116326368162780/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/crocodile__park?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="team-image">
                {" "}
                <img className="team-img" src={team3} alt="teammember" />
              </div>
              <h3>Team 3</h3>
              <p>Greer, SC | @bandholz</p>
              <ul>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/Crocodile-Wildlife-Park-116326368162780/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/crocodile__park?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="team-image">
                {" "}
                <img className="team-img" src={team3} alt="teammember" />
              </div>
              <h3>Team 3</h3>
              <p>Greer, SC | @bandholz</p>
              <ul>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/Crocodile-Wildlife-Park-116326368162780/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/crocodile__park?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
