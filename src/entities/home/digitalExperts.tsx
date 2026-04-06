"use client";

import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import {useRef} from "react";
import {LearnMoreLink} from "@/shared/ui/learnMoreLink";
import {Section} from "@/shared/ui/section";

export function DigitalExperts() {
    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 50,
        mass: 0.1,
        restDelta: 0.001
    });


    const leftY = useTransform(smoothProgress, [0, 0.5, 1], [300, 0, -150]);
    const rightY = useTransform(smoothProgress, [0, 0.5, 1], [300, 0, -150]);

    const imageY = useTransform(smoothProgress, [0, 1], [-100, 100]);

    return (
        <Section>
            <div
                ref={containerRef}
                className="relative overflow-visible"
            >
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                    <motion.div
                        style={{y: imageY}}
                        className="relative w-full max-w-[1090px] aspect-square flex items-center justify-center z-10"
                    >
                        <img
                            src="/digital-experts.webp"
                            alt="Digital Expert"
                            className="w-full !h-auto object-contain grayscale opacity-40 contrast-110"
                        />
                        {/*<div*/}
                        {/*    className="absolute inset-0 bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)] pointer-events-none"/>*/}
                    </motion.div>

                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <div
                            className="container max-w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between px-10">

                            <motion.div
                                style={{y: leftY}}
                                className="pointer-events-auto w-full lg:w-[810px] shadow-2xl rounded-2xl overflow-hidden bg-white translate-y-0"
                            >
                                <img
                                    src="/digital-experts-web.webp"
                                    alt="Technologies"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            <motion.div
                                style={{y: rightY}}
                                className="pointer-events-auto w-full lg:w-[500px] text-left"
                            >
                                <div className="space-y-10">
                                    <h2 className="serif text-[3rem] text-white tracking-tighter m-0">
                                        Digital experts
                                    </h2>
                                    <div className="w-20 h-[1px] bg-white/30 my-3"/>
                                    <div className="space-y-6 max-w-94">
                                        <p className="text-white text-[1.125rem] font-semibold leading-8.75">
                                            As a specialised B2B branding agency, we apply our effective BrainSells
                                            methodology and extensive expertise in B2B marketing to tackle every
                                            challenge.
                                            We combine creativity, technology and data for measurably improved results.
                                            Whether your business is new to the digital world or struggling to achieve
                                            the
                                            desired online success. Our experts are ready to help you! Discover the
                                            impact
                                            of targeted communication with us as your B2B branding partner.
                                        </p>
                                    </div>
                                    <LearnMoreLink href="#" children="Learn More"/>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}