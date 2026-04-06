import { motion } from "framer-motion";
import React from 'react';

interface IProps {
    title: string;
}

export const HeadTitle = ({title}:IProps) => {
    return (
        <section className="mb-[2.5rem]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="leading-16.25"
            >
                <h2 className="serif text-[69px] font-semibold">
                    {title}
                </h2>
            </motion.div>
        </section>
    );
};
