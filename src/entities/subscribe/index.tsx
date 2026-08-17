"use client";

import {useState} from "react";

import {InputField} from "@/shared/ui/inputField";
import {SlideButton} from "@/shared/ui/slideButton";

import {subscribeEmail} from "@/entities/subscribe/Model/api";
import {subscribeSchema} from "@/entities/subscribe/schema";

import styles from "./style.module.scss";
import {showToast} from "nextjs-toast-notify";
import {ValidationError} from "yup";

export const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        try {
            await subscribeSchema.validate({email});

            setError("");
            setLoading(true);

            const res = await subscribeEmail({email});

            showToast.success(res.message, {
                duration: 4000,
                position: "top-right",
                transition: "fadeIn",
                progress: true,
            });

            setEmail("");
        }catch (err: unknown) {
            if (err instanceof ValidationError) {
                setError(err.message);
                return;
            }

            const message =
                err instanceof Error && err.message
                    ? err.message
                    : "Failed to subscribe";

            showToast.error(message, {
                duration: 4000,
                position: "top-right",
                transition: "fadeIn",
                progress: true,
            });
        }finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <InputField
                type="email"
                // label="Email"
                placeholder="Enter your email"
                value={email}
                error={error}
                onChange={(value) => {
                    setEmail(String(value));
                    setError("");
                }}
            />

            <SlideButton
                onClick={handleSubscribe}
                disabled={loading}
                width="w-[130px]"
                height="h-[33px]"
            >
                {loading ? "Subscribing..." : "Subscribe"}
            </SlideButton>
        </div>
    );
};