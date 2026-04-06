"use client"

import React from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import {Section} from "@/shared/ui/section";

export const AdaptiveMix = () => {
    const features = [
        {
            title: "Strategy",
            description: "Provides insight, explores and facilitates successful value propositions that connect people to brands.",
            color: "text-[#fff]",
            bgColor: "bg-[#041547]",
            img: "/strategy.jpg",
        },
        {
            title: "Digital",
            description: "Develops innovative technology that increases the impact of digital communications and improves interaction.",
            color: "text-[#fff]",
            bgColor: "bg-[#00A8AA]",
            img: "/digital.jpg",
        },
        {
            title: "Design",
            description: "Brings brands to life by creatively translating them into optimal design for offline and online applications.",
            color: "text-[#000]",
            bgColor: "bg-[#FAE232]",
            img: "/design.jpg",
        },
        {
            title: "Human",
            description: "Ensures the implementation of a communication strategy through personal insights and competency improvement.",
            color: "text-[#000]",
            bgColor: "bg-[#FF968D]",
            img: "/human.jpeg",
        },
    ];

    return (
        <Section>
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="text-center mb-10"
            >
                <h2 className="max-w-[70%] m-auto mb-4 font-semibold leading-13.75 serif text-center text-[3rem]">
                    With neuromarketing we improve your communication. An
                    <Link href="#" className="underline px-4">
                        adaptive mix
                    </Link>
                    of strategy, technology and design.
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-50px"}}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            y: -8,
                            transition: {duration: 0.2, ease: "easeOut"}
                        }}
                        style={{willChange: "transform"}}
                        className={`${feature?.bgColor} group relative  shadow-sm transition-shadow h-[max-content]`}
                    >
                        <div className="relative z-10 pt-10 px-6">
                            <h3 className={`${feature.color} serif text-center font-semibold text-[1.8rem]`}>
                                {feature.title}
                            </h3>
                            <p className={`${feature.color} text-center font-medium text-[1.2rem]`}>
                                {feature.description}
                            </p>
                        </div>
                        <div className="m-auto max-w-103.25 max-h-103.25">
                            <img src={feature.img} alt="" title=""/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};