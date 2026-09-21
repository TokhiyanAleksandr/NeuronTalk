import React from 'react';
import styles from './style.module.scss';
import {SlideButton} from "@/shared/ui/slideButton";

const images = [
    '/conferences/conference.webp',
    '/conferences/conference.webp',
    '/conferences/conference.webp',
    '/conferences/conference.webp',
    '/conferences/conference.webp',
    '/conferences/conference.webp',
    '/conferences/conference.webp',
    '/conferences/conference.webp',
    '/conferences/conference.webp',
];

export const EventShowcase = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageGrid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageCard}>
                        <img src={src} alt={`Speaker ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className={styles.marquee}>
                <div className={styles.marqueeContent}>
                    <span>• CONFERENCES</span>
                    <span>• LECTURES</span>
                    <span>• WORKSHOPS</span>
                    <span>• CONFERENCES</span>
                    <span>• LECTURES</span>
                    <span>• WORKSHOPS</span>
                </div>
            </div>
<SlideButton>Save My Spot</SlideButton>
            {/*<div className={styles.actionArea}>*/}
            {/*    <button className={styles.saveSpotBtn}>SAVE MY SPOT</button>*/}
            {/*</div>*/}
        </div>
    );
};