"use client"

import {Section} from "@/shared/ui/section";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const services = [
    {
        title: "Neural Networks",
        description: "Deep learning and neural network models for solving complex, real-world problems",
        icon: "/icon.png",
    },
    {
        title: "AI Research",
        description: "Research and experimentation in artificial intelligence and machine learning",
        icon: "/icon.png",
    },
    {
        title: "Data Science",
        description: "Data analysis and extraction of valuable insights from complex datasets",
        icon: "/icon.png",
    },
    {
        title: "Computer Vision",
        description: "Image recognition, visual analysis, and computer vision solutions",
        icon: "/icon.png",
    },
    {
        title: "NLP",
        description: "Natural language processing and large language model solutions",
        icon: "/icon.png",
    },
    {
        title: "ML Engineering",
        description: "Design, deployment, and scaling of machine learning systems in production",
        icon: "/icon.png",
    },
];

export const OurServices = () => {
    return (
        <Section>
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="mb-16 text-center"
            >
                <h2 className="serif mb-4 text-[3.5rem] font-semibold">
                    Our Services
                </h2>
                <p className="mx-auto max-w-2xl text-[1.5rem]">
                    Technologies for building innovative solutions
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-50px"}}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            y: -8,
                            transition: {duration: 0.2, ease: "easeOut"}
                        }}
                        style={{willChange: "transform"}}
                        className="group relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:bg-zinc-800"
                    >
                        <div className="relative z-10 text-white">
                            <div
                                className="w-12.5 h-12.5 mb-4 text-5xl transition-transform duration-200 group-hover:scale-110">
                                <img src={service.icon} alt="" title=""/>
                            </div>
                            <h3 className="mb-3 text-xl font-bold transition-colors duration-200">
                                {service.title}
                            </h3>
                            <p className="text-[1rem]">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};