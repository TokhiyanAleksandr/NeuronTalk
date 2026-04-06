"use client";

import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { InputField } from "@/shared/ui/inputField";
import { PhoneField } from "@/shared/ui/phoneField";
import { SlideButton } from "@/shared/ui/slideButton";
import styles from "./style.module.scss";

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = useCallback(async () => {
        if (!executeRecaptcha) {
            alert("ReCAPTCHA еще не готова");
            return;
        }

        try {
            const token = await executeRecaptcha("contact_form");

            const payload = { name, email, message, token };
            console.log("Данные для отправки:", payload);

            // Здесь твой fetch запрос на бэкенд
        } catch (error) {
            console.error("Ошибка ReCAPTCHA:", error);
        }
    }, [executeRecaptcha, name, email, message]);

    return (
        <div className={styles.form}>
            <InputField
                label="Name"
                value={name}
                placeholder="Enter name"
                onChange={(val) => setName(String(val))}
            />
            <InputField
                label="Email"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(val) => setEmail(String(val))}
            />
            <PhoneField />
            <InputField
                label="Message"
                multiline={true}
                rows={10}
                value={message}
                placeholder="Enter message"
                onChange={(val) => setMessage(String(val))}
            />
            <SlideButton onClick={handleSubmit}>
                Send Message
            </SlideButton>
        </div>
    );
};