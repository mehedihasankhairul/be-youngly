import React from "react";
import Header from "../Pages/Header/Header";
import Products from "../Pages/Products/Products";
import CarouselData from './../Pages/CarouselData/CarouselData';
import HighlightCard from './../Pages/HighlightCard/HighlightCard';
import Footer from './../Pages/Footer/Footer';


export const Home = () => {
  return (
    <div>
      <Header />
      <CarouselData />
      <HighlightCard />
      <Products />
      <Footer />
    </div>
  );
};
