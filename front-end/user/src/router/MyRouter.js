import React, { Fragment } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import VisitorFacilityPage from "../pages/VisitorFacilityPage";
import TheEncounterPage from "../pages/TheEncounterPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";
import StayWithUsPage from "../pages/StayWithUsPage";
import TeamPage from "../pages/TeamPage";

const MyRouter = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/encounter" element={<TheEncounterPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/stayWithUs" element={<StayWithUsPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default MyRouter;
