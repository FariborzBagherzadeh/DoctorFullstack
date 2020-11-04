import React, { Component } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import "./admin.css";
class Admin extends Component {
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
      show: false,
      submit: false,
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
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleSubmit = () => {
    this.setState({ show: false, submit: true });
  };

  render() {
    let total = 0;
    const all = this.state.data.map((e, v) => (
      <tr key={e._id}>
        <td>
          {v + 1} <h1 style={{ display: "none" }}> {(total = v + 1)}</h1>
        </td>
        <td>{e.title}</td>
        <td>{e.createdAt}</td>
        <td>
          <form action={`/admin/delete-data/${e._id}`} method="post">
            <button type="submit" className="btn-submit1">
              <FontAwesomeIcon className="svgremove" icon={faTimes} />
            </button>
          </form>
        </td>
      </tr>
    ));
    return [
      <form action="/admin/add-post" method="post" className="form">
        <Form.Label>POST</Form.Label>
        <br />
        <Form.Control required type="text" placeholder="عنوان" name="title" />
        <br />
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" rows={7} />
        <br />
        <Form.Control
          required
          name="imageURL"
          accept="image/*"
          type="file"
          label="Upload image"
        />
        <br />
        <Button type="submit">تایید</Button>
        <br />
        <br />
      </form>,
      <Table striped bordered hover variant="dark" responsive="md">
        <thead>
          <tr>
            <th>: مجموع </th>
            <th>{total}</th>
          </tr>
          <tr>
            <th>ردیف</th>
            <th>عنوان</th>
            <th>تاریخ</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>{all}</tbody>
      </Table>,
    ];
  }
}
export default Admin;
