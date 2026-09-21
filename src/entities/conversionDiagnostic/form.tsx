"use client";

import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import { InputField } from "@/shared/ui/inputField";
import { PhoneField } from "@/shared/ui/phoneField";
import { SlideButton } from "@/shared/ui/slideButton";
import styles from "./style.module.scss";
import { sendConversionDiagnosticData } from "@/entities/conversionDiagnostic/Model/api";
import { conversionDiagnosticSchema } from "@/entities/conversionDiagnostic/schemas";
import { SelectField } from "@/shared/ui/selectField";
import { ValidationError } from "yup";
import { showToast } from "nextjs-toast-notify";

const IMPROVE_OPTIONS = [
    { value: "Generate more leads", label: "Generate more leads" },
    { value: "Increase conversions/sales", label: "Increase conversions/sales" },
    { value: "Improve website performance", label: "Improve website performance" },
    { value: "Improve messaging", label: "Improve messaging" },
];

export interface FormRef {
    focusNameInput: () => void;
}

export const Form = forwardRef<FormRef>((_, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [improve, setImprove] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const nameInputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focusNameInput: () => {
            if (nameInputRef.current) {
                nameInputRef.current.focus();
            }
        },
    }));

    const validate = async () => {
        try {
            await conversionDiagnosticSchema.validate(
                { name, email, phone, improve, message },
                { abortEarly: false }
            );

            setErrors({});
            return true;
        } catch (err) {
            if (err instanceof ValidationError) {
                const newErrors: Record<string, string> = {};

                err.inner.forEach((e) => {
                    if (e.path) {
                        newErrors[e.path] = e.message;
                    }
                });

                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleSubmit = async () => {
        const isValid = await validate();
        if (!isValid) return;

        setLoading(true);

        try {
            const payload = { name, email, phone, improve, message };

            const res = await sendConversionDiagnosticData(payload);

            showToast.success(res.message, {
                duration: 4000,
                position: "top-right",
                transition: "fadeIn",
                progress: true,
            });

            setName("");
            setEmail("");
            setPhone("");
            setImprove("");
            setMessage("");
            setErrors({});
        } catch (error: unknown) {
            const message =
                error instanceof Error && error.message
                    ? error.message
                    : "Failed to send";

            showToast.error(message, {
                duration: 4000,
                position: "top-right",
                transition: "fadeIn",
                progress: true,
            });
        } finally {
            setLoading(false);
        }
    };

    const updateField = (field: string, value: string) => {
        switch (field) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "improve":
                setImprove(value);
                break;
            case "message":
                setMessage(value);
                break;
        }

        setErrors((prev) => {
            const copy = { ...prev };
            delete copy[field];
            return copy;
        });
    };

    return (
        <div className={styles.form}>
            <InputField
                ref={nameInputRef}
                label="Name"
                value={name}
                placeholder="Enter name"
                onChange={(val) => updateField("name", String(val))}
                error={errors.name}
            />

            <InputField
                label="Email"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(val) => updateField("email", String(val))}
                error={errors.email}
            />

            <PhoneField
                value={phone}
                onChange={(val) => updateField("phone", String(val))}
                error={errors.phone}
            />

            <SelectField
                label="Improve"
                placeholder="What are you trying to improve?"
                options={IMPROVE_OPTIONS}
                value={improve}
                onChange={(val) => updateField("improve", val)}
                error={errors.improve}
            />

            <InputField
                label="Message"
                multiline
                rows={10}
                value={message}
                placeholder="Enter message"
                onChange={(val) => updateField("message", String(val))}
                error={errors.message}
            />

            <SlideButton onClick={handleSubmit} disabled={loading}>
                {loading ? "Sending..." : "Get Free Audit"}
            </SlideButton>
        </div>
    );
});

Form.displayName = "Form";