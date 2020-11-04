import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./second.css";

class Second extends Component {
  render() {
    return [
      <Container style={{textAlign:"center"}}>
        <Row>
          <Col xs={6} sm={6} md={4} lg={4} xl={4} className="secondcol">
            <div>
              <img src="second/hand.png" alt=""  />
              <br />
              <br />
              <p style={{ fontSize: "1.5em", }}>دستانتان را بشویید</p>
            </div>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={4} className="secondcol">
            <div>
              <img src="second/mask.png" alt="" />
              <br />
              <br />
              <p style={{ fontSize: "1.5em" }}>ماسک بزنید</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="secondcol">
            <div>
              <img src="second/distance.png" alt="" />
              <br />
              <br />
              <p style={{ fontSize: "1.5em" }}>فاصله اجتماعی را رعایت کنید</p>
            </div>
          </Col>
        </Row>
      </Container>,
      <br />,
      <br />,
      <br />,
      
   
    ];
  }
}

export default Second;
