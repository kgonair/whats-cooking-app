import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import About from "./components/About";
import Ingredients from "./Ingredients";
import { Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ingredients" component={Ingredients} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact" component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
