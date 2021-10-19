import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-4 col-sm-2 offset-1">
                <h5>Links</h5>

                <ul className="list-unstyled">
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

          <div className="row">
            <div className="col-12 text-center mx-auto">
              <h5>Social</h5>
              <Link
                className="btn btn-social-icon btn-instagram"
                to="http://instagram.com/"
              >
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                className="btn btn-social-icon btn-facebook"
                to="http://facebook.com/"
              >
                <i className="fa fa-facebook"></i>
              </Link>
              <Link
                className="btn btn-social-icon btn-twitter"
                to="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </Link>
              <Link
                className="btn btn-social-icon btn-google"
                to="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </Link>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
