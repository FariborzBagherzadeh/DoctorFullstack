import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Axios from "axios";
import "./post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          _id: "",
          title: "",
          description: "",
          image: "",
          commet: [],
          createdAt: "",
        },
      ],
    };
  }
  componentDidMount() {
    Axios.post("/admin/all-data")
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      })
      .catch((err) => {
        console.log(`There is an Error ${err}`);
      });
  }
  render() {
    const all = this.state.data.map((e, v) => (
      <Row>
        <Col xs={12} md={6} lg={6} xl={6}>
          <br />
          <br />
          <div className="post1">
            <img src="/post/3.jpg" alt="" />
          </div>
          <br />
          <br />
        </Col>
        <Col xs={12} md={6} lg={6} xl={6}>
          <br />
          <br />
          <div className="post-text">
            <h2>{e.title}</h2>
            <br />
            <p>
              {e.description.slice(0, 200)} ...
              <br />
              <br />
              <a href={`/gallery/${e._id}`}>
                <Button className="btnnew">بیشتر</Button>
              </a>
              <hr className="hr" />
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    ));
    return [
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontWeight: "bold",
                  fontSize: "4em",
                  borderBottom: "solid #00203FFF 5px",
                  borderRadius: "10px",
                  color: "#00203FFF",
                  width: "80%",
                }}
              >
                مقالات
              </h1>
            </div>
          </Col>
        </Row>
      </Container>,
      <br />,
      <br />,
      <br />,
      <Container className="post-back">{all}</Container>,

      <br />,
      <br />,
      <br />,
    ];
  }
}

export default Post;
