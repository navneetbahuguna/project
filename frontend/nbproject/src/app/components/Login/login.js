import React, { Fragment } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});
const Login = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
    >
      {(values, errors, touched, handleChange, handleBlur) => (
        <form>
          <div>
            <Typography htmlFor="name">Name</Typography>
            <br />
            <TextField
              type="text"
              fullWidth
              variant="outlined"
              name="name"
              placeholder="enter ur name"
              onChange={handleChange}
              value={values.name} //whatever usr enter
              onBlur={handleBlur}
              // className={touched.email && errors.email ? "has-error" : null}
            />
            <br />
            <Typography htmlFor="name" style={{ marginTop: "5%" }}>
              Email
            </Typography>
            <br />
            <TextField
              type="email"
              fullWidth
              variant="outlined"
              name="email"
              placeholder="enter ur email"
              onChange={handleChange}
              value={values.email} //whatever usr enter
              onBlur={handleBlur}
              // className={touched.name && errors.name ? "has-error" : null}
            />
            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "5%" }}
            >
              <Typography>submit </Typography>
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Login;
