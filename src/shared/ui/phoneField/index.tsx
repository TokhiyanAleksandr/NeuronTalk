"use client";

import React, {useEffect, useState} from 'react';
import PhoneInputWithCountry, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './style.module.scss';

// Теперь пропсы не обязательны, так как стейт внутри
interface Props {
    value?: string;
    label?: string;
    onChange: (value: string) => void;
    error: string
}

export const PhoneField: React.FC<Props> = ({ value = '', label = 'Phone Number', onChange, error }) => {


    // const handlePhoneChange = (newValue?: string) => {
    //     const phoneValue = newValue || '';
    //     setValue(phoneValue);
    //
    //     // Если поле пустое, мы просто сбрасываем ошибку (не пугаем пользователя)
    //     if (!phoneValue) {
    //         setError(null);
    //         return;
    //     }
    //
    //     // Валидируем формат, только если что-то введено
    //     if (isValidPhoneNumber(phoneValue)) {
    //         setError(null);
    //     } else {
    //         setError('Invalid phone number format');
    //     }
    //
    //     onChange(phoneValue)
    // };



    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <PhoneInputWithCountry
                international
                placeholder="Enter phone number"
                value={value}
                //@ts-ignore
                onChange={onChange}
                // Ошибка визуально горит только если поле "трогали"
                className={`${styles.inputWrapper} ${error ? styles.errorInput : ''}`}
            />
            {
                error &&
                <span className={styles.errorMessage}>{error || ''}</span>
            }

        </div>
    );
};