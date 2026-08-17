import styles from "./style.module.scss";
import React, { forwardRef } from "react";

interface CustomInputProps {
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    value: string | number;
    step?: string;
    multiline?: boolean;
    rows?: number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    error?: string;
}

// Используем Union type для ref, так как компонент может быть как input, так и textarea
export const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, CustomInputProps>(
    (
        {
            label,
            type = "text",
            value,
            step,
            multiline = false,
            rows = 3,
            onChange,
            placeholder,
            error,
        },
        ref
    ) => {
        // Общая функция для обработки изменений
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const val = e.target.value;
            if (type === "number") {
                onChange(val === "" ? "" : Number(val));
            } else {
                onChange(val);
            }
        };

        const inputClass = `${styles.inputField} ${error ? styles.errorInput : ""}`;

        const commonProps = {
            value,
            onChange: handleChange,
            className: inputClass,
            placeholder,
        };

        return (
            <div className={styles.wrapper}>
                {label && <label className={styles.label}>{label}</label>}

                {multiline ? (
                    <textarea
                        {...commonProps}
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        rows={rows}
                        style={{ resize: "none" }}
                    />
                ) : (
                    <input
                        {...commonProps}
                        ref={ref as React.Ref<HTMLInputElement>}
                        type={type}
                        step={type === "number" ? step : undefined}
                    />
                )}

                {error && <span className={styles.error}>{error || " "}</span>}
            </div>
        );
    }
);

InputField.displayName = "InputField";