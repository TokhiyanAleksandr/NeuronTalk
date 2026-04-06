"use client";

import { motion } from "framer-motion";
import React from 'react';

interface IProps {
    title: string;
    description: string;
    descriptionClassName?: string;
    className?:string
}

export const HeadSection = ({title, description, className="max-w-[70%] text-center m-auto", descriptionClassName="font-semibold text-[3.5rem]"}:IProps) => {
    return (
        <section className={`mb-32`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${className} leading-16.25`}
            >
                <p className=" text-[1.2rem] tracking-[3px] font-semibold mb-10 uppercase leading-[20px]">
                    {title}
                </p>
                <h3 className={`serif ${descriptionClassName}`}>
                    {description}
                </h3>
            </motion.div>
        </section>
    );
};
