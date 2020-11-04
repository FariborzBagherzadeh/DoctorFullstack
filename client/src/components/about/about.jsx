import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./about.css";

class About extends Component {
  render() {
    return [
      <br />,
      <br />,
      <br />,
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: "center",fontSize:"3em" }}>درباره من</h1>
            <br />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <br/>
            <div className="about-text">
              <p>
                در حرفه پزشکی پزشک عمومی، پزشکی است که بیماریهای حاد و مزمن را
                درمان می‌کند و خدمات پیشگیری و آموزش سلامت را به بیماران ارائه
                می‌کند.یک پزشک عمومی همه انواع بیماریها را مدیریت می‌کند که به
                شکل تمایز نیافته و در مراحل اولیه از شروعشان هستند و گاهی ممکن
                است نیاز به مداخله فوری داشته باشند.
              </p>
            </div>
            
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <br/>
            <div className="about-text">
              <p>
                هدف یک پزشک عمومی در یک مواجهه، داشتن نگرشی کلی در رسیدگی به
                عوامل بیولوژیک، روحی و اجتماعی است که باید برای مراقبت بیماری در
                هر مریض مورد توجه قرار گیرند. وظایف پزشکان عمومی به ارگانهای
                خاصی از بدن محدود نمی‌شود و آنها مهارتهای نسبی در زمینه درمان
                اشخاص با مشکلات متعدد سلامتی را دارا هستند.
              </p>
            </div>
            <br/>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <br/>
              <img style={{display:"flex",marginLeft:"auto",marginRight:"auto"}} src="/about/doctor.png" alt="doctor"/>
              <br/>
              <br/>
          </Col>
        </Row>
      </Container>,
    ];
  }
}

export default About;
