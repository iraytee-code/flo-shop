import * as yup from "yup";

const LoginSchema = yup.object({
    email: yup.string().email("Must be a valid email address").required("Email address is required"),
    password: yup.string().required("Required"),
})

export default LoginSchema