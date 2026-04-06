"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Showcase.module.scss";

// Tvoi unikal'nye foto (bez povtorov)
const UNIQUE_IMAGES = [
    "/conferences/conference.webp",
    "/conferences/conference.webp",
    "/conferences/conference.webp",
    "/conferences/conference.webp",
    "/conferences/conference.webp",
];

export function Showcase() {
    const [cards, setCards] = useState<any[]>([]);
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    useEffect(() => {
        // Generiruem 50 "dekorativnykh" kartochek dlya fona
        const generated = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            src: UNIQUE_IMAGES[i % UNIQUE_IMAGES.length], // Tut oni mogut povtoryat'sya
            size: i % 3 === 0 ? "large" : i % 3 === 1 ? "medium" : "small",
            x: (i % 7 * 14) + (Math.random() * 8),
            y: (Math.floor(i / 7) * 14) + (Math.random() * 8),
            driftX: (Math.random() - 0.5) * 100,
            driftY: (Math.random() - 0.5) * 100,
            duration: 20 + Math.random() * 20,
            delay: Math.random() * -20,
        }));
        setCards(generated);
    }, []);

    return (
        <section className={styles.section22}>
            {/* Kontent */}
            <div className={styles.content}>
                <h1 className={styles.title}>Creative Moments From <br /><span>Our Global Showcase</span></h1>
                <button className={styles.btn} onClick={() => setIsSliderOpen(true)}>
                    View Gallery ↗
                </button>
            </div>

            {/* Plavayushchiy fon (50 kartochek) */}
            <div className={styles.canvas}>
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className={`${styles.card} ${styles[card.size]}`}
                        initial={{ left: `${card.x}%`, top: `${card.y}%`, opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            x: [0, card.driftX, 0],
                            y: [0, card.driftY, 0],
                        }}
                        transition={{ duration: card.duration, repeat: Infinity, ease: "linear", delay: card.delay }}
                    >
                        <Image src={card.src} alt="" fill className={styles.img} sizes="200px" />
                    </motion.div>
                ))}
            </div>

            {/* SLAIDER (Otkryvaetsya pri klike) */}
            <AnimatePresence>
                {isSliderOpen && (
                    <motion.div
                        className={styles.sliderOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button className={styles.closeBtn} onClick={() => setIsSliderOpen(false)}>✕</button>

                        <div className={styles.swiperContainer}>
                            <Swiper
                                modules={[Navigation, Pagination, Mousewheel]}
                                navigation
                                pagination={{ clickable: true }}
                                mousewheel={true}
                                spaceBetween={30}
                                slidesPerView={1}
                                breakpoints={{
                                    768: { slidesPerView: 1.5, spaceBetween: 50 }
                                }}
                                centeredSlides={true}
                                className={styles.mySwiper}
                            >
                                {/* Tut renderim TOL'KO unikal'nye foto */}
                                {UNIQUE_IMAGES.map((src, idx) => (
                                    <SwiperSlide key={idx} className={styles.slide}>
                                        <div className={styles.slideImgWrapper}>
                                            <Image src={src} alt="Showcase" fill className={styles.sliderImg} sizes="80vw" priority />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}