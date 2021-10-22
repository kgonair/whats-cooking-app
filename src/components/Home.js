import React, { Component } from "react";
import Carousel from "./Carousel";
import HowTo from "./HowTo";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Carousel />
          <HowTo/>
        </div>
      </>
    );
  }
}

export default Home;
