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
            {/* Сетка с изображениями под наклоном */}
            <div className={styles.imageGrid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageCard}>
                        <img src={src} alt={`Speaker ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Бегущая строка */}
            <div className={styles.marquee}>
                <div className={styles.marqueeContent}>
                    <span>• CONFERENCES</span>
                    <span>• LECTURES</span>
                    <span>• WORKSHOPS</span>
                    {/* Дублируем для бесконечного эффекта */}
                    <span>• CONFERENCES</span>
                    <span>• LECTURES</span>
                    <span>• WORKSHOPS</span>
                </div>
            </div>
<SlideButton>Save My Spot</SlideButton>
            {/*/!* Кнопка снизу *!/*/}
            {/*<div className={styles.actionArea}>*/}
            {/*    <button className={styles.saveSpotBtn}>SAVE MY SPOT</button>*/}
            {/*</div>*/}
        </div>
    );
};