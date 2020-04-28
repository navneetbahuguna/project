import React, { Component } from "react";
import { Dialog, DialogContent, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RegistartionForm from "../Login/login";
import { getData } from "../../../store/actions/get.action";
class Form extends Component {
  handleSubmit = () => {
    console.log("done");
  };
  componentDidMount = () => {
    console.log("this.props.getData", this.props.getData);
  };
  render() {
    const { open, onClose, data } = this.props;
    console.log("getData", data);
    return (
      <Grid>
        <Dialog open={open} onClose={onClose}>
          <DialogContent>
            <RegistartionForm onSubmit={this.submit} />
          </DialogContent>
        </Dialog>
      </Grid>
    );
  }
}
const mapStateToProps = ({ getdataReducer }) => {
  return {
    data: getdataReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getData,

    // getInclusionAction
  })(Form)
);
