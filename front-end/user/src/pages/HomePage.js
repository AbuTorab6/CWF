import React, { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Proprietor from "../components/Proprietor";
import Experiance from "../components/Experiance";
import Purchase from "../components/Purchase";
import Presentation from "../components/Presentation";
import Encounter from "../components/Encounter";
import ParkMap from "../components/ParkMap";
import PlanYourVisit from "../components/PlanYourVisit";
import OurFarm from "../components/OurFarm";
import Product from "../components/Product";

import Mission from "../components/Mission";
import ExplorePark from "../components/ExplorePark";
import HeartPounding from "../components/HeartPounding";
import BookYourAdvance from "../components/BookYourAdvance";
import Footer from "../components/Footer";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Proprietor />
      <Experiance />
      <Purchase />
      <Presentation />

      {/* <Mission/>
            <ExplorePark/>
            <HeartPounding/>
            <BookYourAdvance/> */}
      <Footer />
    </Fragment>
  );
};

export default HomePage;
