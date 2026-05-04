"use client";
import {useEffect, useRef, useState} from 'react';
import Matter from 'matter-js';
import styles from './style.module.scss';
import {SlideButton} from "@/shared/ui/slideButton";
import {Partner} from "@/entities/conferences/Model/type";
import Link from "next/link";

const LOGOS_DATA = [
    {id: 1, src: '/careers.webp'}, {id: 2, src: '/design.jpg'},
    {id: 3, src: '/digital.jpg'}, {id: 4, src: '/careers.webp'},
    {id: 5, src: '/design.jpg'}, {id: 6, src: '/digital.jpg'},
    {id: 7, src: '/careers.webp'}, {id: 8, src: '/design.jpg'},
    {id: 9, src: '/design.jpg'}, {id: 10, src: '/digital.jpg'},
    {id: 11, src: '/careers.webp'}, {id: 12, src: '/design.jpg'},
    {id: 13, src: '/careers.webp'}, {id: 14, src: '/design.jpg'},
    {id: 15, src: '/digital.jpg'},
];

interface IProps {
    data: Partner[]
}

export const Partners = ({data}: IProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const engineRef = useRef(Matter.Engine.create());

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, {threshold: 0.1});
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || !containerRef.current) return;

        const {World, Bodies, Runner, Events, Composite, Mouse, MouseConstraint} = Matter;
        const engine = engineRef.current;
        const world = engine.world;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        // Константы для размера 180px
        const ballRadius = 90;
        const blueCircleRadius = 200; // Радиус для круга 400px
        const centerY = height - blueCircleRadius;

        // Стены
        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, {isStatic: true});
        const wallL = Bodies.rectangle(-100, height / 2, 200, height, {isStatic: true});
        const wallR = Bodies.rectangle(width + 100, height / 2, 200, height, {isStatic: true});

        // Препятствие (Синий круг)
        const centerObstacle = Bodies.circle(width / 2, centerY, 205, {isStatic: true});

        Composite.add(world, [ground, wallL, wallR, centerObstacle]);

        // Шары 180px
        const bodies = LOGOS_DATA.map((_, i) => {
            return Bodies.circle(
                Math.random() * (width - 300) + 150, // Рандомный X
                -200 - (i * 280),
                ballRadius,
                {
                    restitution: 0.5,
                    frictionAir: 0.02,
                    angle: Math.random() * Math.PI
                }
            );
        });

        Composite.add(world, bodies);

        // Мышка
        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {stiffness: 0.1, render: {visible: false}}
        });
        Composite.add(world, mouseConstraint);

        const logoElements = containerRef.current.querySelectorAll(`.${styles.logoItem}`);

        Events.on(engine, 'afterUpdate', () => {
            bodies.forEach((body, i) => {
                const el = logoElements[i] as HTMLElement;
                if (el) {
                    // Смещение 90 для центрирования 180-пиксельного шара
                    const x = body.position.x - ballRadius;
                    const y = body.position.y - ballRadius;
                    el.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
                    el.style.opacity = "1";
                }
            });
        });

        const runner = Runner.create();
        Runner.run(runner, engine);

        return () => {
            Runner.stop(runner);
            World.clear(world, false);
            Matter.Engine.clear(engine);
        };
    }, [isVisible]);

    return (
        <section className={styles.container} ref={containerRef}>
            <h2 className={styles.title}>Trusted by leaders</h2>

            <div className={styles.centerContent}>
                <div className={styles.cta}>
                    <h4><span>PUT YOUR BRAND</span> ON THE GLOBAL STAGE</h4>
                    <SlideButton>COLLABORATE</SlideButton>
                </div>
            </div>

            {data?.map((partner) => (
                <div
                    key={partner.id}
                    className={styles.logoItem}
                    style={{ opacity: 0, position: 'absolute', top: 0, left: 0 }}
                >
                    <img src={partner.logo || ''} alt={partner.name} />
                </div>
            ))}
        </section>
    );
};