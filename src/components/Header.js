import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  render() {
    return (
      <>
        <div>
          <Jumbotron>
            <div className="container">
              <div className="row">
                <div className="col-sm text-center mx-auto">
                  <h1>What's Cooking?</h1>
                  <h2>Find a Recipe best for you</h2>
                </div>
              </div>
            </div>
          </Jumbotron>
          <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
            <div class="container">
              <div class="collapse navbar-collapse" id="Navbar">
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
