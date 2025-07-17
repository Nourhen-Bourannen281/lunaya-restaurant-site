import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="heroSection" id="heroSection">
  <Navbar />
  <div className="container">

    <h1 className="title">Delicious</h1>

    <div className="row">
      <div className="imageBox">
        <img src="./hero1.jpeg" alt="Hero Left" />
      </div>
      <h1 className="dishes_title">    Dishes</h1>
    </div>

    <div className="row">
      <h1 className="dishes_title">Food     </h1>
      <div className="imageBox">
        <img src="./hero2.jpeg" alt="Hero Right" />
      </div>
    </div>

  </div>
</div>

  );
};

export default HeroSection;
