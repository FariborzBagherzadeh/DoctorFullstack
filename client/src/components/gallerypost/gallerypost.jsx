import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import comments from "./comment.png";
import "./gallerypost.css";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import Axios from "axios";

class GalleryPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          _id: "",
          title: "",
          description: "",
          image: "",
          comment: [],
          createdAt: "",
        },
      ],
    };
  }
  componentDidMount() {
    Axios.get(`/admin/gallery/${this.props.id}`)
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      })
      .catch((err) => {
        console.log(`There is an Error ${err}`);
      });
  }

  render() {
    let allComments = [];
    const comment = this.state.data.comment;
    for (const prop in comment) {
      allComments.push({ name: comment[prop].name, body: comment[prop].body });
    }
    const all = allComments.map((e, v) => (
      <div>
        <h4>{e.name}</h4>
        <h5>{e.body}</h5>
      </div>
    ));

    return [
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="postp">
            <br />
            <br />
            <br />
            <br />
            <div>
              <h1 style={{ fontSize: "3em" }}>{this.state.data.title}</h1>
              <br />
              <br />
            </div>
          </Col>

          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="postimg">
            <img src="/post/2.jpg" alt="" />
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12}>
            <br />
            <br />

            <div className="gallery-text">
              <br />
              <br />
              <h2 style={{ textAlign: "center" }}>توضیحات</h2>
              <p>
                <br />
                <br />
                {this.state.data.description}
              </p>
              <br />
              <br />
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="stars">
            <br />
            <br />
            <ReactStars count={5} size={50} color2={"#ffd700"} edit={true} />
            <form method="post">
              <Button
                style={{ fontSize: "1.2em" }}
                variant="contained"
                type="submit"
              >
                تایید
              </Button>
            </form>
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="comment">
            <br />
            <br />
            <img
              src={comments}
              alt="comment"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
              }}
            />
            <br />
            <br />
            <div className="commentbase">
              <div className="eachcomment">{all}</div>
              <br />
              <br />
              <br />
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} md={12} xl={12} className="commentpost">
            <br />
            <br />
            <br />
            <form
              action={`/admin/gallery/${this.props.id}/comment`}
              method="post"
            >
              <br />
              <br />
              <Form.Control
                required
                size="lg"
                type="text"
                placeholder="اسم"
                name="name"
                style={{ direction: "rtl" }}
              />
              <br />

              <Form.Control
                required
                placeholder="کامنت"
                as="textarea"
                rows="5"
                name="comment"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                  direction: "rtl",
                }}
              />

              <br />
              <Button variant="contained" type="submit">
                ارسال
              </Button>
              <br />
              <br />
            </form>
          </Col>
        </Row>
      </Container>,
      <br />,
      <br />,
      <br />,
      <br />,
    ];
  }
}
export default GalleryPost;
