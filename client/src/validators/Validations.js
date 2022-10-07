import * as yup from "yup";

export const userSchema = yup.object().shape({
  first_name: yup.string().required("First name is required!"),
  last_name: yup.string().required("Last name is required!"),
  email: yup.string().email().required("Email is required!"),
  password: yup.string().min(6).max(18).required("Invalid password!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null, "Passwords don't match!"])
    .required(),
});

export const challengeSchema = yup.object().shape({});
