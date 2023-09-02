import React, { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation";
import EveryPageTop from "../components/EveryPageTop";
import StayWithUs from "../components/StayWithUs";
import Footer from "../components/Footer";

const StayWithUsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Navigation />
      <EveryPageTop pageTitle="Stay With Us" />
      <StayWithUs />
      <Footer />
    </Fragment>
  );
};

export default StayWithUsPage;
