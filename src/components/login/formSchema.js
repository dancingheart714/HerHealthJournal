import * as Yup from 'yup'

export const registrationFormSchema = Yup.object().shape({
    username: Yup.string()
        .min(6, "Name must be at least 6 characters")
        .required("Must include username"),
    email: Yup.string()
        .email("Must use valid email address")
        .required("Email address is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password must include letters and numbers"),
});

export const loginFormSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password must include letters and numbers"),
    username: Yup.string()
        .min(6, "Username must be at least 6 characters")
        .required("Must include username")
});