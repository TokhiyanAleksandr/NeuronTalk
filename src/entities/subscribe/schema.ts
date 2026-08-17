import * as yup from "yup";

export const subscribeSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
});