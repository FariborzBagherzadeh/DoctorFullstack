import React, { Component } from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import "./five.css";

class Five extends Component {
  render() {
    return [
      <div style={{ backgroundColor: "#FFFEFD", color: "#E6DDCD" }}>
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div style={{ textAlign: "center", color: "black" }}>
                <h1>مطالب بروز</h1>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className="news" style={{ width: "21rem" }}>
                <Card.Body>
                  <Card.Title>قند خون</Card.Title>
                  <Card.Text>
                  <br />
                    <img className="cardImg" src="/five/diabet.png" alt="" />
                    <br />
                    <br/>
                    ویروس کرونایی که به تازگی کشف شده است موجب بیماری عفونی
                    کووید-19 میشود. این ویروس نوظهور و بیماری ناشی از آن، تا قبل
                    از شروع طغیان اخیر در دسامبر سال 2019 در شهر ووهان،کشور چین،
                    ناشناخته بود
                    <br />
                  </Card.Text>
                  <Button variant="primary">ادامه مطلب</Button>
                </Card.Body>
              </Card>
              <br />
              <br />
            </Col>

            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className="news" style={{ width: "21rem" }}>
                <Card.Body>
                  <Card.Title>کورونا</Card.Title>
                  <Card.Text>
                  <br />
                    <img className="cardImg" src="/five/corona.png" alt="" />
                    <br />
                    <br/>
                    ویروس کرونایی که به تازگی کشف شده است موجب بیماری عفونی
                    کووید-19 میشود. این ویروس نوظهور و بیماری ناشی از آن، تا قبل
                    از شروع طغیان اخیر در دسامبر سال 2019 در شهر ووهان،کشور چین،
                    ناشناخته بود
                    <br />
                  </Card.Text>
                  <Button variant="primary">ادامه مطلب</Button>
                </Card.Body>
              </Card>
              <br />
              <br />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card className="news" style={{ width: "21rem" }}>
                <Card.Body>
                  <Card.Title className="card-title">سلامت چشم</Card.Title>

                  <Card.Text>
                    <br />
                    <img className="cardImg" src="/five/eye.png" alt="" />
                    <br />
                    <br/>
                    ویروس کرونایی که به تازگی کشف شده است موجب بیماری عفونی
                    کووید-19 میشود. این ویروس نوظهور و بیماری ناشی از آن، تا قبل
                    از شروع طغیان اخیر در دسامبر سال 2019 در شهر ووهان،کشور چین،
                    ناشناخته بود
                    <br />
                  </Card.Text>
                  <Button variant="primary">ادامه مطلب</Button>
                </Card.Body>
              </Card>
            </Col>
            <br />
            <br />
          </Row>
        </Container>
        <br />
        <br />
      </div>,
      <br />,
      <br />,
      <br />,
      <br />,
      <br />,
      <br />,
      <br />,
      <br />,
    ];
  }
}
export default Five;
