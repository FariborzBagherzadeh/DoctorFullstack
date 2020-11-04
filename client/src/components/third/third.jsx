import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./third.css";

class Third extends Component {
  render() {
    return [
      <div style={{ backgroundColor: "#2F80A6" }}>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ textAlign: "right", color: "white" }}
            >
              <div>
                <br /> <br />
                <h1>ویروس کرونا چیست؟</h1>
                <br />
                <p style={{ fontSize: "1.4em", wordSpacing: "5px" }}>
                  ویروس‌های کرونا خانواده بزرگی از‌ ویروس‌ها هستند که می‌توانند
                  حیوانات و انسان‌ها را بیمار کنند. تعداد زیادی از ویروس‌های
                  کرونا که تاکنون شناخته‌شده‌اند، موجب ابتلا به طیفی از
                  عفونت‎های دستگاه تنفسی در انسانها می‌شوند. که از سرماخوردگی تا
                  ابتلا به بیماری‌های شدیدتری مثل سندروم تنفسی خاورمیانه
                  (مرس-MERS) و سندروم تنفسی حاد (سارس-SARS) متغیر هستند. ویروس
                  کرونایی که به تازگی کشف شده است عامل ابتلا به بیماری کووید-19
                  است.
                </p>
                <br /> <br /> <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>,
 
    ];
  }
}
export default Third;
