import React, { Component } from "react";
import Post from "./components/post/post.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import First from "./components/first/first.jsx";
import Second from "./components/second/second.jsx";
import Third from "./components/third/third.jsx";
import Five from "./components/five/five.jsx";
import Footer from "./components/footer/footer.jsx";
import Gallery from "./components/gallerypost/gallerypost"
import About from "./components/about/about";
import Admin from "./components/admin/admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GalleryPost = (props) => {
  return [<Navbar />, <Gallery id={props.match.params._id} />, <Footer />];
};
const Home = () => {
  return [
    <Navbar />,
    <First />,
    <Second />,
    <Third />,
    <Five />,
    <Post />,
    <Footer />,
  ];
};
const AboutPage = () => {
  return [<Navbar />, <About />, <Footer />];
};
const AdminPost = () => {
  return [<Admin />];
};

class App extends Component {
  render() {
    return [
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/gallery/:_id" component={GalleryPost} />
          <Route exact path="/SuperAdmin" component={AdminPost} />
        </Switch>
      </BrowserRouter>,
    ];
  }
}
export default App;
