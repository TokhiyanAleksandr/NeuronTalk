'use client';

import React, { useRef, useEffect, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props { children: ReactNode; }

export function ScrollContainer({ children }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault(); // Блокируем стандартный быстрый скролл
            if (isScrolling.current) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const vh = window.innerHeight;
            const currentScroll = container.scrollTop;

            const target = direction > 0
                ? Math.ceil((currentScroll + 1) / vh) * vh
                : Math.floor((currentScroll - 1) / vh) * vh;

            isScrolling.current = true;

            container.scrollTo({
                top: target,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isScrolling.current = false;
            }, 100);
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => container.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div ref={containerRef} className={styles.viewport}>
            {children}
        </div>
    );
}