import React from "react";
// import BannerImage from "../../assets/phsioBanner.jpg";
import Header from "../header/header";
import Content from "../content/content";
function home() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      {/* <img
        src={BannerImage}
        alt="phsio"
        width="100%"
        style={{ height: "100vh" }}
      /> */}{" "}
      <h1>nihdi</h1>
    </React.Fragment>
  );
}

export default home;
