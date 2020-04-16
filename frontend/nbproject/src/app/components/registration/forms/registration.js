import React, { Component, Fragment } from "react";
import { Formik, Form } from "formik";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
class RegistrationForm extends Component {
  apiSubmit = (e) => {
    console.log("yes", e);
    this.props.onSubmit("yes");
  };
  render() {
    const { validationSchema, initialValues, touched, error } = this.props;
    return (
      <Formik
        onSubmit={(e) => this.apiSubmit(e)}
        // validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues}
        render={({ dirty, isSubmitting, ...props }) => {
          console.log("isSubmitting", props);
          return (
            <Fragment>
              <Grid>
                <Form noValidate>
                  <Typography>Name</Typography>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    error={touched && touched.name && error.name ? true : false}
                    // helperText={touched && error ? error : null}
                    fullWidth
                  />
                  <Typography>Email</Typography>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    // error={touched && error ? true : false}
                    // helperText={touched && error ? error : null}
                    fullWidth
                  />
                  <Typography>Phone</Typography>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    // error={touched && error ? true : false}
                    // helperText={touched && error ? error : null}
                    fullWidth
                  />
                  <Typography>Password</Typography>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    // error={touched && error ? true : false}
                    // helperText={touched && error ? error : null}
                    fullWidth
                  />
                  <Button
                    // onClick={this.apiSubmit}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </Grid>
            </Fragment>
          );
        }}
      />
    );
  }
}
export default RegistrationForm;
