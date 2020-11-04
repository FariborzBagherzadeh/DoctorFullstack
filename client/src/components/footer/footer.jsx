import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return [
      <div className="footer">
          <br/>
        <h5 >
          CopyRight © {new Date().getFullYear()} Desigend By FARIBORZ BAGHERZADE
        </h5>
        <br/>
      </div> ,
    ];
  }
}
export default Footer;
