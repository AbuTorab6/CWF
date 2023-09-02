import React, { Fragment, useEffect } from "react";

import Navigation from "../components/Navigation";
import EveryPageTop from "../components/EveryPageTop";
import OurFarm from "../components/OurFarm";
import Purchase from "../components/Purchase";
import Product from "../components/Product";
import Footer from "../components/Footer";

const ProductPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Navigation />
      <EveryPageTop pageTitle="Our Product" />
      <OurFarm />
      <Purchase />
      <Product />
      <Footer />
    </Fragment>
  );
};

export default ProductPage;
