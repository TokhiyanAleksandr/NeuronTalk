"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import {SlideButton} from "@/shared/ui/slideButton";

const EVENTS_DATA = // public/data/events.json
    [
        { "id": 1, "title": "Design Systems for Scale", "date": "AUG 20 • 6:00 PM UTC", "status": "[LIVE + REPLAY]", "speaker": "With Adam Cooper,", "role": "Lead Product Designer at Wise", "video": "/videos/1.mp4", "thumbnail": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400" },
        { "id": 2, "title": "Future of AI Interfaces", "date": "SEP 05 • 4:00 PM UTC", "status": "[REPLAY ONLY]", "speaker": "With Sarah Jenkins,", "role": "Senior UX at Google", "video": "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", "thumbnail": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400" },
        { "id": 3, "title": "Creative Coding Workshop", "date": "OCT 12 • 2:00 PM UTC", "status": "[LIVE]", "speaker": "With Mike Ross,", "role": "Creative Director at Adobe", "video": "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", "thumbnail": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400" },
        { "id": 4, "title": "Digital Strategy 2026", "date": "NOV 15 • 5:00 PM UTC", "status": "[LIVE]", "speaker": "With Elena Volkova,", "role": "Strategy Lead at TechFlow", "video": "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", "thumbnail": "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400" },
        { "id": 5, "title": "Motion Design Mastery", "date": "DEC 01 • 7:00 PM UTC", "status": "[REPLAY ONLY]", "speaker": "With Marcus Aurelius,", "role": "Motion Designer at Pixar", "video": "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", "thumbnail": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400" }
    ]

export const UpcomingEvents = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isResetting, setIsResetting] = useState(false); // Новый стейт
    const videoRef = useRef<HTMLVideoElement>(null);

    const activeEvent = EVENTS_DATA[activeIndex];

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // При смене индекса — мгновенно сбрасываем прогресс без анимации
        setIsResetting(true);
        setProgress(0);
        video.load();

        // Маленький таймаут, чтобы браузер успел применить 0% без транзишна
        const timer = setTimeout(() => setIsResetting(false), 50);

        const updateProgress = () => {
            if (video.duration && !isResetting) {
                setProgress((video.currentTime / video.duration) * 100);
            }
        };

        const handleEnded = () => {
            setActiveIndex((prev) => (prev + 1) % EVENTS_DATA.length);
        };

        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('ended', handleEnded);

        return () => {
            clearTimeout(timer);
            video.removeEventListener('timeupdate', updateProgress);
            video.removeEventListener('ended', handleEnded);
        };
    }, [activeIndex]);

    const handleThumbClick = (index: number) => {
        if (index === activeIndex) {
            if (videoRef.current) videoRef.current.currentTime = 0;
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.sectionTitle}>UPCOMING EVENTS</h2>
            <div className={styles.mainScreen}>
                <video ref={videoRef} autoPlay muted playsInline className={styles.bgVideo}>
                    <source src={activeEvent.video} type="video/mp4"/>
                </video>
                <div className={styles.overlay}/>
                <div className={styles.infoPanel} key={activeEvent.id}>
                    <p className={styles.date}>{activeEvent.date}</p>
                    <h3 className={styles.title}>{activeEvent.title}</h3>
                    <p className={styles.status}>{activeEvent.status}</p>
                    <div className={styles.divider}/>
                    <p className={styles.speaker}>{activeEvent.speaker} <br /><span>{activeEvent.role}</span></p>
                    <SlideButton>JOIN EVENT</SlideButton>
                </div>
            </div>

            <div className={styles.thumbnails}>
                {EVENTS_DATA.map((event, index) => {
                    const isWatched = index < activeIndex;
                    const isActive = index === activeIndex;
                    const fillWidth = isWatched ? 100 : isActive ? progress : 0;

                    return (
                        <div
                            key={event.id}
                            className={`${styles.thumbItem} ${isActive ? styles.active : ''}`}
                            onClick={() => handleThumbClick(index)}
                        >
                            <div className={styles.thumbImageWrapper}>
                                <img src={event.thumbnail} alt="" className={styles.mainImg}/>
                                <div
                                    className={`${styles.blurOverlay} ${isResetting ? styles.noTransition : ''}`}
                                    style={{ width: `${fillWidth}%` }}
                                >
                                    <img src={event.thumbnail} alt="" className={styles.blurredImg}/>
                                </div>
                                <div className={styles.progressTrack}>
                                    <div
                                        className={`${styles.progressFill} ${isResetting ? styles.noTransition : ''}`}
                                        style={{ width: `${fillWidth}%` }}
                                    />
                                </div>
                            </div>
                            <p className={styles.thumbTitle}>{event.title.toUpperCase()}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};