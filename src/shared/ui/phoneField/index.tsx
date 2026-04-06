"use client";

import React, { useState } from 'react';
import PhoneInputWithCountry, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './style.module.scss';

// Теперь пропсы не обязательны, так как стейт внутри
interface Props {
    initialValue?: string;
    label?: string;
}

export const PhoneField: React.FC<Props> = ({ initialValue = '', label = 'Phone Number' }) => {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<string | null>(null);
    const [isTouched, setIsTouched] = useState(false); // Новое состояние

    const handlePhoneChange = (newValue?: string) => {
        const phoneValue = newValue || '';
        setValue(phoneValue);

        // Если поле пустое, мы просто сбрасываем ошибку (не пугаем пользователя)
        if (!phoneValue) {
            setError(null);
            return;
        }

        // Валидируем формат, только если что-то введено
        if (isValidPhoneNumber(phoneValue)) {
            setError(null);
        } else {
            setError('Invalid phone number format');
        }
    };

    const handleBlur = () => {
        setIsTouched(true);
        // Если при выходе из поля оно пустое — показываем ошибку
        if (!value) {
            setError('Phone number is required');
        }
    };

    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <PhoneInputWithCountry
                international
                placeholder="Enter phone number"
                value={value}
                onChange={handlePhoneChange}
                onBlur={handleBlur} // Отслеживаем выход из поля
                // Ошибка визуально горит только если поле "трогали"
                className={`${styles.inputWrapper} ${isTouched && error ? styles.errorInput : ''}`}
            />
            {isTouched && error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};