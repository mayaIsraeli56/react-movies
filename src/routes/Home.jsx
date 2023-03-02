import React from "react";
import Navigation from "./Navigation";
import "../App.css"

const Home = () => {
  return (
    <div>
      <Navigation disable={"Home"}></Navigation>
      <div className="flex">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
