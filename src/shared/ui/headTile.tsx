import { motion } from "framer-motion";
import React from 'react';

interface IProps {
    title: string;
}

export const HeadTitle = ({ title }: IProps) => {
    return (
        <section className="mb-6 md:mb-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="serif text-2xl sm:text-4xl md:text-[69px] font-semibold leading-tight">
                    {title}
                </h2>
            </motion.div>
        </section>
    );
};
