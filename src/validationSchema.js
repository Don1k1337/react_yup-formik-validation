import * as Yup from "yup";

export const validationSchema = Yup.object({
    email:  Yup.string()
        .email('Enter valid email address')
        .required('Email can not be empty'),
    password: Yup.string()
        // .min(6, 'Password must be at least 6 characters')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number & One special case Character")
        .required('Password can not be empty'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password can not be empty')
})