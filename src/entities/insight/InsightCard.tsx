"use client";

import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";
import {Blog} from "@/entities/insight/Model/type";

interface IProps {
    item: Blog;
    index: number
}

export const InsightCard = ({item, index}: IProps) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, {once: true, margin: "-10%"});


    return (
        <Link href={`/insights/${item.slug}`}>
            <motion.div
                ref={cardRef}
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 1.2, delay: index * 0.2, ease: [0.215, 0.61, 0.355, 1]}}
                className="group cursor-pointer outline-none ring-0 border-none shadow-none bg-transparent"
            >
                <div
                    className="max-h-[350px] min-h-[350px] w-[100%] relative aspect-[3/4] overflow-hidden border-none outline-none">
                    <motion.img
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
                        src={item.image || ""}
                        // src={"/design.jpg"}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block border-none shadow-none"
                    />

                    {/*<div className="absolute bottom-6 left-6 overflow-hidden">*/}
                    {/*    <motion.span*/}
                    {/*        initial={{y: "105%"}}*/}
                    {/*        animate={isInView ? {y: 0} : {y: "105%"}}*/}
                    {/*        transition={{duration: 0.3, delay: index * 0.1 + 0.3}}*/}
                    {/*        className="block bg-black text-white px-3 py-1 text-[10px] uppercase tracking-[0.1em]"*/}
                    {/*    >*/}
                    {/*        {"item.category"}*/}
                    {/*    </motion.span>*/}
                    {/*</div>*/}
                </div>

                <div className="mt-8 border-none outline-none">
                    <p className="text-[10px] mb-3 text-gray-400 font-mono tracking-widest uppercase">
                        {item.type}
                    </p>

                    <h3 className="serif text-2xl leading-[1.2] transition-transform duration-500 ease-out group-hover:translate-x-2 border-none">
                        {item.title}
                    </h3>

                    {/*<p className="mt-4 text-gray-500 text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">*/}
                    {/*    {"item.excerpt"}*/}
                    {/*</p>*/}
                </div>
            </motion.div>
        </Link>

    );
};