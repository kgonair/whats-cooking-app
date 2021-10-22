import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import companyLogo from "../assets/logo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Header extends Component {
  render() {
    return (
      <>
        <div>
          <Jumbotron className="jumbotron-fluid">
            <div className="container">
              <div className="row">
                <div className="col-sm text-center mx-auto">
                  <img
                    src={companyLogo}
                    alt="What's Cooking logo"
                    height="100"
                    width="100"
                  />

                  <h1>What's Cooking?</h1>
                  <h2>Find a Recipe best for you</h2>
                </div>
              </div>
            </div>
          </Jumbotron>
          <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
            <div className="container">
              <Button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#Navbar"
              >
                <span className="navbar-toggler-icon"></span>
              </Button>
              <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link to="/home" className="nav-link">
                      <i className="fa fa-list fa-lg"></i> Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ingredients" className="nav-link">
                      <i className="fa fa-list fa-lg"></i> Ingredients
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/recipes" className="nav-link">
                      <i className="fa fa-list fa-lg"></i> Recipes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      <i className="fa fa-info fa-lg"></i> About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      <i className="fa fa-address-card fa-lg"></i> Contact
                    </Link>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
