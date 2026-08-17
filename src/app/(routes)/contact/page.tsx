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
                        sectionClassName="mb-6"
                    />

                    <div className={styles.topGlow} />

                    <div className={styles.formGroup}>
                        <ReCaptchaProvider>
                            <Form />
                        </ReCaptchaProvider>

                        <div className={styles.content}>

                            {/* background */}
                            <div className="absolute inset-0 z-0">
                                <NeuralNetwork />
                            </div>

                            {/* overlay */}
                            <div className={styles.overlay} style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.9))',
                                zIndex: 1
                            }}/>

                            {/* content */}
                            <div className="relative z-20">
                                <div className={styles.info}>
                                    <div className={styles.infoField}>
                                        <p>Call us</p>
                                        <LearnMoreLink href="tel:+37494203065">
                                            +37455705875
                                        </LearnMoreLink>
                                    </div>

                                    <div className={styles.infoField}>
                                        <p>Mail us</p>
                                        <LearnMoreLink href="mailto:contact@neurontalks.am">
                                            contact@neurontalks.am
                                        </LearnMoreLink>
                                    </div>

                                    <SocialSection />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Section>
        </MainSection>
    );
}