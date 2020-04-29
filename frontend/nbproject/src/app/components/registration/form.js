import React, { Component } from "react";
import { Dialog, DialogContent, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import RegistartionForm from "../Login/login";
import { getData } from "../../../store/actions/get.action";
class Form extends Component {
  handleSubmit = (data) => {
    console.log("data", data);
    let name = data.name;
    console.log("name", name);
    this.props.getData(name);
  };
  componentDidMount = () => {
    this.props.getData();
  };
  render() {
    const { open, onClose, data } = this.props;
    console.log("getData", data);
    const values = { name: "", email: "", phone: "", comment: "" };

    return (
      <Grid>
        <Dialog open={open} onClose={onClose}>
          <DialogContent>
            <Formik
              render={(props) => <RegistartionForm {...props} />}
              initialValues={values}
              // validationSchema={validationSchema}
              onSubmit={this.handleSubmit}
            />
          </DialogContent>
        </Dialog>
        {/* <RegistartionForm open={open} /> */}
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
