import React, { Component } from "react";
import { Container, Row, Col, List } from 'reactstrap';
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="site-footer">
        <Container>
          <Row>
          <Col sm={{size:6}}>
            {/* <Col sm={{ size: 6,  offset: 1 }}> */}
              <h5>Links</h5>
              {/* <List type="unstyled inline" style={{display:'inline' }}> */}
              <List type="unstyled">
                <li>
                  <Link to="/home">Home</Link>{'  '}
                </li>
                <li>
                  <Link to="ingredients">Ingredients</Link>{'  '}
                </li>
                <li>
                  <Link to="recipes">Recipes</Link>{'  '}
                </li>
                <li>
                  <Link to="about">About</Link>{'  '}
                </li>
              </List>
            </Col>
              <Col sm={{size:6 }}>
              {/* <Col sm={{size: 6, textAlign: "center", offset: 6 }}> */}
                <h5>Find Us</h5>
                <a
                  className="btn btn-sm btn-social-icon btn-facebook"
                  href="http://facebook.com"
                >
                  <i className="fa fa-facebook" />
                </a>{' '}
                <a className="btn btn-sm btn-social-icon btn-instagram" href="http://instagram.com">
                  <i className="fa fa-instagram" />
                </a> {' '}
                <a className="btn btn-sm btn-social-icon btn-twitter" href="http://twitter.com">
                  <i className="fa fa-twitter" />
                </a>{' '}
              </Col>
            </Row>
          </Container>
        </div>
        </React.Fragment>

    );
  }
}

export default Footer;
