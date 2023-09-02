import React, { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation";
import EveryPageTop from "../components/EveryPageTop";
import Encounter from "../components/Encounter";
import ParkMap from "../components/ParkMap";
import PlanYourVisit from "../components/PlanYourVisit";
import Footer from "../components/Footer";

const TheEncounterPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Navigation />
      <EveryPageTop pageTitle="The Encounter" />
      <Encounter />
      <ParkMap />
      <PlanYourVisit />
      <Footer />
    </Fragment>
  );
};

export default TheEncounterPage;
