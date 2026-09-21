'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './style.module.scss';

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export function Section({ children, className }: SectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.section} ${className || ''} ${isVisible ? styles.active : ''}`}
        >
                {children}
       </section>
    );
}