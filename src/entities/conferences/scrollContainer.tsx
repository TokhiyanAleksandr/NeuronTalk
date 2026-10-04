'use client';

import React, { useRef, useEffect, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props { children: ReactNode; }

export function ScrollContainer({ children }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);
    const touchStartY = useRef(0);
    const touchMoved = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollToDirection = (direction: number) => {
            if (isScrolling.current) return;

            const vh = window.innerHeight;
            const currentScroll = container.scrollTop;
            const maxScroll = container.scrollHeight - vh;

            if (direction > 0 && currentScroll >= maxScroll - 5) return;
            if (direction < 0 && currentScroll <= 5) return;

            const target = direction > 0
                ? Math.min(Math.ceil((currentScroll + 1) / vh) * vh, maxScroll)
                : Math.max(Math.floor((currentScroll - 1) / vh) * vh, 0);

            isScrolling.current = true;

            container.scrollTo({
                top: target,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isScrolling.current = false;
            }, 500); // Чуть увеличили таймаут для плавной анимации на iOS
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const direction = e.deltaY > 0 ? 1 : -1;
            scrollToDirection(direction);
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
            touchMoved.current = false;
        };

        const handleTouchMove = (e: TouchEvent) => {
            // Предотвращаем дефолтный скролл и pull-to-refresh на iOS во время нашего жеста
            if (!touchMoved.current) {
                const currentY = e.touches[0].clientY;
                const diff = touchStartY.current - currentY;
                const threshold = 30; // Чуть уменьшили порог для отзывчивости на айфоне

                if (Math.abs(diff) > threshold) {
                    const direction = diff > 0 ? 1 : -1;
                    scrollToDirection(direction);
                    touchMoved.current = true; // Срабатывает только один раз за один свайп
                }
            }
        };

        // Используем passive: false чтобы e.preventDefault() работал на iOS без предупреждений
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.viewport}>
            {children}
        </div>
    );
}