import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
//import * as i from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';
// import s from './Footer.css';
import { CONFIG } from '../../config';

class Footer extends Component {
  render() {
    return (
      <Row
        className="justify-content-center text-center"
        style={{ backgroundColor: '#eeeeee', width: '100%', margin: '0px', position: 'absolute', bottom: '0'}}
      >
        <Col>
          <div className="mt-5">
            &copy; {new Date().getFullYear()} {CONFIG.whoAmI}. All rights
            reserved.
          </div>
          <div className="mb-5">
            <LinkContainer to="/feedback">
              <a>
                <strong>Leave Feedback</strong>
              </a>
            </LinkContainer>
            &nbsp; - &nbsp;
            <a href={`mailto:` + CONFIG.email} target="_blank">
              <strong>Media Inquiries</strong>
            </a>
          </div>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Footer);
