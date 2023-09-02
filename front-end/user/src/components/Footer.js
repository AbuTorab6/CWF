import React, { Fragment } from "react";

import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <section className="footer-section">
        <div className="row">
          <div className="footer-grid">
            <div>
              {/* <h3>Address: </h3> */}
              <p>
                Farm Address : Ward-23 Mouja-Beltoli, Mymensingh City
                Corporation, Mymensingh-2200, Bangladesh.
              </p>
              <p>Office Address : House-884, Road-11, Avenue-2, Mirpur DOHS.</p>
              <p>
                <AiOutlineMail /> salahuddinace56@gmail.com
              </p>
              {/* <p><AiOutlineMail/> shihabul @gmail.com</p> */}
              <p>
                <BiLink /> www.crocodilewildlifepark.com
              </p>
            </div>

            <div>
              {/* <h3>Managing Director:</h3> */}
              {/* <p><AiOutlinePhone/> +8801711536869, +8801741267900</p> */}
              <h3>Proprietor : Talal Md. Tahsinul Quadir</h3>
              <p>
                <AiOutlinePhone /> +8801676128340
              </p>
              <h3>Scope of Business: </h3>
              <p> Export of crocodile skin/ Finished Leather Products</p>
              <h3>Country of export:</h3>
              <p> Japan, Europe </p>
              {/* <h3>Overseas Contact:</h3>
                            <p><AiOutlinePhone/> UK: +44 7787715560</p>
                            <p><AiOutlinePhone/> Singapore: +65 8407 0422</p>
                            <p><AiOutlinePhone/> Canada: +1 431 244 4511</p> */}
            </div>

            <div>
              <h3>Social Media </h3>
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
            <div>
              <h3>Quick Links</h3>
              <p>
                <Link className="footer-link" to="/about">
                  About us
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="/services">
                  Our Services
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="/team">
                  Our Team
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="/product">
                  Our Products
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="/technology">
                  Technology We Use
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section-bottom">
        <div className="row">
          <p>
            &copy; {new Date().getFullYear()} Crocodile Wildlife Park | All
            Rights Reserved.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
