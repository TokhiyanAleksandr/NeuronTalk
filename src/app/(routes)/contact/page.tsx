import {MainSection} from "@/shared/ui/mainSection";
import {HeadSection} from "@/shared/ui/headSection";
import {Section} from "@/shared/ui/section";
import {ReCaptchaProvider} from "@/shared/providers/ReCaptchaProvider";
import {Form} from "@/entities/contact/form";
import styles from "./style.module.scss";
import Link from "next/link";
import {LearnMoreLink} from "@/shared/ui/learnMoreLink";
import {NeuralNetwork} from "@/shared/ui/NeuralNetwork";
import {SocialSection} from "@/shared/ui/socialMedias";

export default function ContactPage() {
    return (
        <MainSection>
            <Section>
                <div className={styles.contact}>
                    <HeadSection
                        title="Contact"
                        description="Let's get down to business."
                    />
                    <div className={styles.topGlow}/>

                    <div className={styles.formGroup}>
                        <ReCaptchaProvider>
                            <Form/>
                        </ReCaptchaProvider>
                        <div className={styles.content}>
                            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                                <NeuralNetwork />
                            </div>
                            {/* Твой черный слой (градиент) поверх анимации */}
                            <div className={styles.overlay} style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.9))',
                                zIndex: 1
                            }} />
                            <div className={styles.info}>
                                <div className={styles.infoField}>
                                    <p>Call us</p>
                                    <LearnMoreLink href="#">
                                        +37433554540
                                    </LearnMoreLink>
                                </div>
                                <div className={styles.infoField}>
                                    <p>Mail us</p>
                                    <LearnMoreLink href="mailto:+37433554540">
                                        aleksandr@tokhiyan.com
                                    </LearnMoreLink>
                                </div>
                               <SocialSection/>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>
        </MainSection>
    );
}