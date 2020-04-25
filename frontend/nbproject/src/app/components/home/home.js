import React from "react";
import BannerImage from "../../../assests/images/banner.jpg";
import Header from "../header/header";
import Content from "../content/content";
import { Link } from "react-router-dom";
// import "./index.html";
function home() {
  return (
    <React.Fragment>
      <Header />
      {/* <Content /> */}
      <img
        src={BannerImage}
        alt="phsio"
        width="100%"
        style={{ height: "100vh" }}
      />
    </React.Fragment>
  );
}

export default home;
