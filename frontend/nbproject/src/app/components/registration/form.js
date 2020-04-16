import React, { Component } from "react";
import { Dialog, DialogContent, Grid } from "@material-ui/core";
import RegistartionForm from "../registration/forms/registration";
import validationSchema from "../registration/forms/validationSchema";
export default class Form extends Component {
  handleSubmit = () => {
    console.log("done");
  };
  render() {
    const { open, onClose } = this.props;
    return (
      <Grid>
        <Dialog open={open} onClose={onClose}>
          <DialogContent>
            <RegistartionForm
              initialValues={{ name: "", email: "", phone: "", password: "" }}
              onSubmit={this.handleSubmit}
              validationSchema={validationSchema}
            />
          </DialogContent>
        </Dialog>
      </Grid>
    );
  }
}
