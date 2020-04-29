import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
// import "./form.css";
import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles((theme) => ({
  input: {
    "&::placeholder": {
      color: "#bbc2c8",
    },
    fontSize: "14px",
    color: "#616e78",
    // height: 50
  },
}));
const Form = (props) => {
  const {
    values: { name, email, phone, comment },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;
  const classes = UseStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="caption" style={{ color: "#16222b" }}>
        Name
      </Typography>
      <TextField
        name="name"
        placeholder="name"
        variant="outlined"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        margin="dense"
        style={{
          marginBottom: 15,
          marginTop: 5,

          color: "#616e78",
        }}
        value={name}
        onChange={handleChange}
        fullWidth
        InputProps={{
          className: classes.input,
        }}
      />

      <Typography variant="caption" style={{ color: "#16222b" }}>
        Email
      </Typography>
      <TextField
        name="email"
        placeholder="email"
        variant="outlined"
        margin="dense"
        style={{ marginBottom: 15, marginTop: 5 }}
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        fullWidth
        value={email}
        onChange={handleChange}
        InputProps={{
          className: classes.input,
        }}
      />

      <Typography variant="caption" style={{ color: "#16222b" }}>
        Phone No.
      </Typography>
      <TextField
        name="phone"
        placeholder="+91"
        helperText={touched.phone ? errors.phone : ""}
        error={touched.phone && Boolean(errors.phone)}
        variant="outlined"
        className="numeric"
        fullWidth
        // type="number"
        margin="dense"
        value={phone}
        style={{ marginBottom: 15, marginTop: 5 }}
        onChange={handleChange}
        InputProps={{
          className: classes.input,
        }}
      />
      {phone === "" && email === "" && name === "" ? (
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          style={{ textTransform: "none", marginBottom: 15, marginTop: 15 }}
          disabled
        >
          Submit
        </Button>
      ) : (
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          style={{ textTransform: "none", marginBottom: 15, marginTop: 15 }}
          // disabled={!isValid}
        >
          Submit
        </Button>
      )}
    </form>
  );
};
export default Form;
