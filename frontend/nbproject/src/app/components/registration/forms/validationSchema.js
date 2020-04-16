import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "that's not your number"
    )
    .min(8, "min is 8")
    .max(15, "max is 15")
    .required("Phone number is required"),
  //   password: Yup.string()
  //     .required("pass")
  //     .password("enter valid pasword")
});
export default validationSchema;
