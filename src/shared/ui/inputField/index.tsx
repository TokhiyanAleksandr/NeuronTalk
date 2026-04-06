import styles from "./style.module.scss";
import React from "react";
import {placeholder} from "@babel/types";

interface CustomInputProps {
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    value: string | number;
    step?: string;
    multiline?: boolean;
    rows?: number;
    onChange: (value: string | number) => void;
    placeholder?: string
}

// InputField.tsx
export const InputField = ({
                               label,
                               type = "text",
                               value,
                               step,
                               multiline = false, // Новое
                               rows = 3,          // Новое
                               onChange,
                               placeholder
                           }: CustomInputProps) => {

    // Общая функция для обработки изменений
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const val = e.target.value;
        if (type === "number") {
            onChange(val === "" ? "" : Number(val));
        } else {
            onChange(val);
        }
    };

    const commonProps = {
        value,
        onChange: handleChange,
        className: styles.inputField, // Общий класс для рамок и шрифтов
    };

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}

            {multiline ? (
                <textarea {...commonProps} rows={rows} placeholder={placeholder} style={{resize: "none"}}/>
            ) : (
                <input {...commonProps} type={type} step={type === "number" ? step : undefined}
                       placeholder={placeholder}/>
            )}
        </div>
    );
};