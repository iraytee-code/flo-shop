import * as yup from "yup";

const RegisterSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email address is required"),
    username: yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
    password: yup.string()
    .required('Password is required') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password must contain alphabets.').matches(/[0-9]/, 'password must contain numbers'),
    phoneNumber: yup.string().required("Phone NUmber is Required"),
    address: yup.string().required("Address is Required"),
})

export default RegisterSchema