"use client";
import React, { useRef } from 'react';
import { MainSection } from "@/shared/ui/mainSection";
import { Section } from "@/shared/ui/section";
import { HeadSection } from "@/shared/ui/headSection";
import styles from "./style.module.scss";
import { ReCaptchaProvider } from "@/shared/providers/ReCaptchaProvider";
import { Form, FormRef } from "@/entities/conversionDiagnostic/form";
import { NeuralNetwork } from "@/shared/ui/NeuralNetwork";

const ANALYZE_ITEMS = [
    { title: "Behavioral Friction", desc: "Where users hesitate or lose confidence" },
    { title: "Attention & Messaging", desc: "Whether your value proposition is clear" },
    { title: "Conversion Journey", desc: "Where prospects drop off" },
    { title: "Persuasion & Trust", desc: "What may create uncertainty" },
    { title: "Growth Opportunities", desc: "What to improve first" },
];

const ConversionDiagnostics = () => {
    const formRef = useRef<FormRef>(null);

    const handleFocusForm = () => {
        formRef.current?.focusNameInput();
    };

    return (
        <MainSection>
            <Section>
                <div className={styles.conversionDiagnostic}>
                    <HeadSection
                        title=""
                        description="Conversion Diagnostics"
                        sectionClassName="mb-6"
                    />

                    <div className={styles.topGlow} />

                    <div className={styles.formGroup}>
                        <ReCaptchaProvider>
                            <Form ref={formRef} />
                        </ReCaptchaProvider>

                        <div className={styles.content}>
                            <div className="absolute inset-0 z-0">
                                <NeuralNetwork />
                            </div>

                            <div
                                className={styles.overlay}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.9))',
                                    zIndex: 1
                                }}
                            />

                            <div className="relative z-20 w-full">
                                <div className={styles.info}>
                                    <h2 className={styles.title}>
                                        Find What’s Blocking Your Conversions
                                    </h2>

                                    <p className={styles.description}>
                                        Get a free behavioral and conversion diagnostic of your website. We’ll identify where prospects lose attention, trust, or momentum and highlight the highest-impact opportunities to improve.
                                    </p>

                                    <div className={styles.analyzeSection}>
                                        <h3 className={styles.subtitle}>What We’ll Analyze</h3>
                                        <ul className={styles.list}>
                                            {ANALYZE_ITEMS.map((item, index) => (
                                                <li key={index} className={styles.listItem}>
                                                    <span className={styles.bullet}>✓</span>
                                                    <div>
                                                        <strong>{item.title}</strong> — {item.desc}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div
                                        className={styles.callout}
                                        onClick={handleFocusForm}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Request Your Website&#39;s Conversion Diagnostics
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </MainSection>
    );
};

export default ConversionDiagnostics;