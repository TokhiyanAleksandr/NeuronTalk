"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";

export interface Option {
    value: string;
    label: string;
}

interface SelectFieldProps {
    label?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
}

export const SelectField = ({
                                label,
                                options,
                                value,
                                onChange,
                                placeholder = "Select an option",
                                error,
                            }: SelectFieldProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    // Закрытие при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (val: string) => {
        onChange(val);
        setIsOpen(false);
    };

    return (
        <div className={styles.wrapper} ref={containerRef}>
            {label && <label className={styles.label}>{label}</label>}

            <div
                className={`${styles.select} ${isOpen ? styles.open : ""} ${error ? styles.error : ""}`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={!selectedOption ? styles.placeholder : styles.selectedValue}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>

                <span className={styles.arrow}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </div>

            {/* Выпадающий список */}
            {isOpen && (
                <ul className={styles.dropdown}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`${styles.option} ${option.value === value ? styles.selected : ""}`}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};