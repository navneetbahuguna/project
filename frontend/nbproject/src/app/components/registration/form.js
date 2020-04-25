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
    const values = { name: "", email: "", phone: "", comment: "" };

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
