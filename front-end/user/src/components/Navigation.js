import React, { Fragment, useState, useEffect } from "react";

import "../asset/css/custom.css";

import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineInfoCircle,
  AiOutlineFolderOpen,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  MdOutlineLocalActivity,
  MdProductionQuantityLimits,
  MdAddHomeWork,
} from "react-icons/md";

import navLogo from "../asset/image/navLogo.png";
import navLogoScroll from "../asset/image/navLogoScroll.png";

const Navigation = () => {
  const [v1, v2] = useState({
    navigationBackground: "navigation-background",
    navigationBrand: "navigation-brand",
    navigationList: "navigation-list",
    navLogo: [navLogoScroll],
  });

  var jubo = () => {
    var topNav = document.querySelector(".top-nav");
    if (window.scrollY > 1) {
      v2({
        navLogo: [navLogoScroll],
        navigationBackground: "navigation-background-scroll",
        navigationBrand: "navigation-brand",
        navigationList: "navigation-list-scroll",
      });

      topNav.classList.add("visibility-none");
      topNav.classList.remove("visibility-yes");
    } else if (window.scrollY < 1) {
      v2({
        navLogo: [navLogoScroll],
        navigationBackground: "navigation-background",
        navigationBrand: "navigation-brand",
        navigationList: "navigation-list",
      });

      topNav.classList.remove("visibility-none");
      topNav.classList.add("visibility-yes");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", jubo);
  });

  return (
    <Fragment>
      <nav className="top-nav visibility-yes">
        <div className=" nav-row">
          <div className="top-nav-grid">
            <div className="top-nav-left">
              <ul>
                <li>
                  <AiOutlinePhone />
                  <span>+8801676128340</span>
                </li>
                <li>
                  <BsEnvelope />
                  <span> salahuddinace56@gmail.com</span>
                </li>
              </ul>
            </div>

            <div className="top-nav-right">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/Crocodile-Wildlife-Park-116326368162780/"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <FaLinkedinIn />
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
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Navbar
        className={v1.navigationBackground}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <NavLink className={v1.navigationBrand} to="/">
              <img src={v1.navLogo} /> Crocodile Wildlife Park
            </NavLink>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink className={v1.navigationList} to="/">
                <span className="navigation-icon">
                  <AiOutlineHome />
                </span>
                Home
              </NavLink>
              <NavLink className={v1.navigationList} to="/encounter">
                <span className="navigation-icon">
                  <MdOutlineLocalActivity />
                </span>
                The Encounter
              </NavLink>
              <NavLink className={v1.navigationList} to="/stayWithUs">
                <span className="navigation-icon">
                  <MdAddHomeWork />
                </span>
                Stay With Us
              </NavLink>
              <NavLink className={v1.navigationList} to="/product">
                <span className="navigation-icon">
                  <MdProductionQuantityLimits />
                </span>
                Products
              </NavLink>
              {/* <NavLink className={v1.navigationList} to="/gallery">
                <span className="navigation-icon">
                  <MdProductionQuantityLimits />
                </span>
                Gallery
              </NavLink> */}
              <NavLink className={v1.navigationList} to="/about">
                <span className="navigation-icon">
                  <AiOutlineInfoCircle />
                </span>
                About
              </NavLink>
              <NavLink className={v1.navigationList} to="/team">
                <span className="navigation-icon">
                  <AiOutlineInfoCircle />
                </span>
                Team
              </NavLink>
              <NavLink className={v1.navigationList} to="/contact">
                <span className="navigation-icon">
                  <AiOutlineFolderOpen />
                </span>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
