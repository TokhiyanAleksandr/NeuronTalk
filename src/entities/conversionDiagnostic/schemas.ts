import * as yup from "yup";

export const conversionDiagnosticSchema = yup.object({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),

    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email"),

    phone: yup
        .string()
        .required("Phone is required")
        .min(6, "Invalid phone"),

    improve: yup
        .string()
        .required("Please select what you are trying to improve"),

    message: yup
        .string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
});