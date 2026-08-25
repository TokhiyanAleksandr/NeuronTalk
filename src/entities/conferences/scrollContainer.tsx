'use client';

import React, { useRef, useEffect, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props { children: ReactNode; }

export function ScrollContainer({ children }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);

    // Переменные для отслеживания свайпов на мобилках
    const touchStartY = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Универсальная функция для скролла к следующей/предыдущей секции
        const scrollToDirection = (direction: number) => {
            if (isScrolling.current) return;

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
            }, 400); // Увеличил таймаут для плавности анимации свайпа
        };

        // Обработчик колесика мыши (для десктопа)
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const direction = e.deltaY > 0 ? 1 : -1;
            scrollToDirection(direction);
        };

        // Обработчики сенсорных событий (для мобилок)
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY.current - touchEndY;

            // Порог срабатывания свайпа (в пикселях), чтобы случайно не срабатывало от микро-движений
            const threshold = 50;

            if (Math.abs(diff) > threshold) {
                const direction = diff > 0 ? 1 : -1; // свайп вверх (вниз страницы) или вниз (вверх страницы)
                scrollToDirection(direction);
            }
        };

        // Вешаем слушатели
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        // Очищаем слушатели при размонтировании
        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.viewport}>
            {children}
        </div>
    );
}