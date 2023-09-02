import React, { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation";
import EveryPageTop from "../components/EveryPageTop";
import History from "../components/History";
import Mission from "../components/Mission";
import OurPark from "../components/OurPark";
import ExpartCare from "../components/ExpartCare";
import EducationAware from "../components/EducationAware";
import Ethical from "../components/Ethical";
import PlanYourVisit from "../components/PlanYourVisit";
import Footer from "../components/Footer";

const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Navigation />
      <EveryPageTop pageTitle="About Us" />
      <History />
      <Mission />
      <OurPark />
      <ExpartCare />
      <EducationAware />
      <Ethical />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
