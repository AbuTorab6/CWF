import React, { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation";
import EveryPageTop from "../components/EveryPageTop";
import Team from "../components/Team";
import Footer from "../components/Footer";

const TeamPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Navigation />
      <EveryPageTop pageTitle="Our Team" />
      <Team />
      <Footer />
    </Fragment>
  );
};

export default TeamPage;
