import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import "./first.css";

class First extends Component {
  render() {
    return [
      <Carousel className="slider" interval={5000} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100" src="/first/1.jpg" alt="First slide" />
          <Carousel.Caption className="slider-text">
            <h1>بروز ترین مطالب پزشکی</h1>
            <h3>جدید ترین بیماری ها و پیشرفت تکنولوژی در پزشکی</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/first/2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="slider-text">
            <h1>بروز ترین مطالب پزشکی</h1>
            <h3>جدید ترین بیماری ها و پیشرفت تکنولوژی در پزشکی</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/first/3.jpg" alt="Third slide" />

          <Carousel.Caption className="slider-text">
            <h1>بروز ترین مطالب پزشکی</h1>
            <h3>جدید ترین بیماری ها و پیشرفت تکنولوژی در پزشکی</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>,
      <br />,
      <br />,
      <br />,
      <br />,
    ];
  }
}

export default First;
