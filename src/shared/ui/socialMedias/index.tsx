import {
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    Github,
    Send
} from "lucide-react";
import styles from "./style.module.scss";
import { LearnMoreLink } from "@/shared/ui/learnMoreLink";

export const SocialSection = () => {
    const socials = [
        // { icon: <Github size={20} />, label: "Github", href: "https://github.com/yourlink" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/neuron_talks/" },
        { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/NeuronTalksConference" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/company/neuron-talks" },
    ];

    return (
        <div className={styles.socialMedias}>
            <p className={styles.socialTitle}>Follow us</p>
            <div className={styles.socialGrid}>
                {socials.map((social, index) => (
                    <div key={index} className={styles.socialItem}>
                        <LearnMoreLink href={social.href}>
                            <span className={styles.iconWrapper}>
                                {social.icon}
                                <span className={styles.label}>{social.label}</span>
                            </span>
                        </LearnMoreLink>
                    </div>
                ))}
            </div>
        </div>
    );
};