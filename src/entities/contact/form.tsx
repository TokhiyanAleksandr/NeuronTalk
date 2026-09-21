"use client";

import { useState } from "react";
import { InputField } from "@/shared/ui/inputField";
import { PhoneField } from "@/shared/ui/phoneField";
import { SlideButton } from "@/shared/ui/slideButton";
import styles from "./style.module.scss";
import {sendContactData} from "@/entities/contact/Model/api";
import {contactSchema} from "@/entities/contact/schemas";
import {showToast} from "nextjs-toast-notify";

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const validate = async () => {
        try {
            await contactSchema.validate(
                { name, email, phone, message },
                { abortEarly: false }
            );

            setErrors({});
            return true;
        } catch (err: any) {
            const newErrors: Record<string, string> = {};

            err.inner?.forEach((e: any) => {
                if (e.path) {
                    newErrors[e.path] = e.message;
                }
            });

            setErrors(newErrors);
            return false;
        }
    };

    const handleSubmit = async () => {
        const isValid = await validate();
        if (!isValid) return;

        setLoading(true);

        try {
            const payload = { name, email, phone, message };

            const res = await sendContactData(payload);

            showToast.success(res.message, {
                duration: 4000,
                position: "top-right",
                transition: "fadeIn",
                progress: true,
            });

            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setErrors({});
        }  catch (error: unknown) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Failed to send your message";

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
                {loading ? "Sending..." : "Send Message"}
            </SlideButton>
        </div>
    );
};