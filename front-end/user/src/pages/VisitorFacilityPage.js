import React, { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation";
import EveryPageTop from "../components/EveryPageTop";
import Visitor from "../components/Visitor";
import Footer from "../components/Footer";

const VisitorFacilityPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <Fragment>
      <Navigation />
      <EveryPageTop pageTitle="Visitor's Facilities" />
      <Visitor />
      <Footer />
    </Fragment>
  );
};

export default VisitorFacilityPage;
