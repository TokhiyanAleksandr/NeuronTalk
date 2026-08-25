"use client";

import { motion } from "framer-motion";
import React from "react";

interface IProps {
    title: string;
    description: string;
    descriptionClassName?: string;
    className?: string;
    sectionClassName?: string;
}

export const HeadSection = ({
                                title,
                                description,
                                className = "max-w-2xl text-center m-auto",
                                descriptionClassName = "font-semibold text-2xl md:text-4xl lg:text-[3.5rem]",
                                sectionClassName = "mb-10 lg:mb-16 xl:mb-32",
                            }: IProps) => {
    return (
        <section className={sectionClassName}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`${className}`}
            >
                <p className="text-[1rem] md:text-[1.2rem] tracking-[3px] font-semibold  md:my-10 uppercase leading-tight">
                    {title}
                </p>

                <h3 className={`${descriptionClassName}`}>
                    {description}
                </h3>
            </motion.div>
        </section>
    );
};