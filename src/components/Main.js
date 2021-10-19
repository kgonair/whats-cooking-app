import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Ingredients from "./Ingredients";
import Recipes from "./Recipes";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/Recipes" component={Recipes} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
