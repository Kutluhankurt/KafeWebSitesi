import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/ui/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import React from "react";

import Customers from "@/components/customers/Customers";

const Index = ({ categoryList, productList }) => {

  return <div>
    <Carousel />
    <Campaigns />
    <MenuWrapper categoryList={categoryList} productList={productList} />
    <About />
    <Reservation />
    <Customers />
  </div>;
};

export default Index;