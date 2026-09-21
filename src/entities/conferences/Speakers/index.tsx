"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from './style.module.scss';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import {Speaker} from "@/entities/conferences/Model/type";

// interface Speaker {
//     id: number;
//     name: string;
//     role: string;
//     image: string;
// }

// const SPEAKERS: Speaker[] = [
//     { id: 1, name: "Jessica Thompson", role: "Chief Design Officer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=1000&auto=format&fit=crop" },
//     { id: 2, name: "Ethan Parker", role: "Principal Product Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=1000&auto=format&fit=crop" },
//     { id: 3, name: "Amanda Johnson", role: "Head of Design at Wise", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&h=1000&auto=format&fit=crop" },
//     { id: 4, name: "Liam Thompson", role: "Lead Experience Designer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&h=1000&auto=format&fit=crop" },
//     { id: 5, name: "Sarah Miller", role: "Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=1000&auto=format&fit=crop" },
// ];


interface IProps {
    data: Speaker[]
}

export const Speakers = ({data}: IProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            const target = e.target as HTMLElement;
            const isOverImage = !!target.closest(`.${styles.imageWrapper}`);

            if (!isOverImage) return;

            const isAtStart = el.scrollLeft <= 0;
            const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

            const canScrollRight = e.deltaY > 0 && !isAtEnd;
            const canScrollLeft = e.deltaY < 0 && !isAtStart;

            if (canScrollRight || canScrollLeft) {
                e.preventDefault();
                e.stopPropagation();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!wrapperRef.current) return;

        const rect = wrapperRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });

        const target = e.target as HTMLElement;
        setShowScroll(!!target.closest(`.${styles.imageWrapper}`));
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>SPEAKERS</h2>

            <div
                className={styles.wrapper}
                ref={wrapperRef}
                onMouseMove={handleMouseMove}
            >
                <div
                    className={`${styles.scrollCircle} ${showScroll ? styles.visible : ''}`}
                    style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`
                    }}
                >
                    <span>SCROLL</span>
                </div>

                <div className={`${styles.scrollContainer} m-auto max-w-[1680px] px-6`} ref={scrollRef}>
                    {data?.map((speaker) => (
                        <div key={speaker.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={speaker.image} alt={speaker.fullname} draggable="false" />
                            </div>
                            {/*<div className={styles.socials}>*/}
                            {/*    <div className={styles.icon}><FaXTwitter /></div>*/}
                            {/*    <div className={styles.icon}><FaLinkedinIn /></div>*/}
                            {/*    <div className={styles.icon}><FaFacebookF /></div>*/}
                            {/*</div>*/}

                            <div className={styles.info}>
                                <h3>{speaker.fullname}</h3>
                                <p>{speaker.profession}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};