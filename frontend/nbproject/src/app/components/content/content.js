import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "../../../store/actions/get.action";
class Content extends Component {
  componentDidMount = () => {
    this.props.getData();
  };
  render() {
    console.log("this.props.data", this.props.data);
    return <h1>data</h1>;
  }
}
const mapStateToProps = ({ getdataReducer }) => {
  return {
    data: getdataReducer,

    // _inclusion:getInclusionReducer
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getData,
  })(Content)
);
