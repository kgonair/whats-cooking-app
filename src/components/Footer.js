import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-4 col-sm-2 offset-1">
                <h5>Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="ingredients">Ingredients</Link>
                  </li>
                  <li>
                    <Link to="recipes">Recipes</Link>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                  <li>
                    <Link to="about">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
