"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface IProps {
    title?: string;
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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(false);

        const timer = requestAnimationFrame(() => {
            setVisible(true);
        });

        return () => cancelAnimationFrame(timer);
    }, [description]);

    return (
        <section className={sectionClassName}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: visible ? 1 : 0,
                    y: visible ? 0 : 30,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className={className}
            >
                <h3 className={`pt-5 ${descriptionClassName}`}>
                    {description}
                </h3>
            </motion.div>
        </section>
    );
};