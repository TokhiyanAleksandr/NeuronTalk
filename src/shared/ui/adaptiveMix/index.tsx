"use client"

import React from 'react';
import {motion} from "framer-motion";
import {Section} from "@/shared/ui/section";
import {HomeResponse} from "@/entities/home/Model/type";

interface IProps {
    data: HomeResponse['services']
}

export const AdaptiveMix = ({ data }: IProps) => {
    const colors = [
        {
            color: "text-[#fff]",
            bgColor: "bg-[#041547]",
        },
        {
            color: "text-[#fff]",
            bgColor: "bg-[#00A8AA]",
        },
        {
            color: "text-[#000]",
            bgColor: "bg-[#FAE232]",
        },
        {
            color: "text-[#000]",
            bgColor: "bg-[#FF968D]",
        }
    ]

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
                    {data.title}
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {data.data.map((feature, index) => (
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
                        className={`${colors[index]?.bgColor} group relative  shadow-sm transition-shadow h-[max-content]`}
                    >
                        <div className="relative z-10 pt-10 px-6">
                            <h3 className={`${colors[index].color} serif text-center font-semibold text-[1.8rem]`}>
                                {feature.title}
                            </h3>
                            <p className={`${colors[index].color} text-center font-medium text-[1.2rem]`}>
                                {feature.description}
                            </p>
                        </div>
                        <div className="m-auto max-w-103.25 max-h-103.25">
                            <img src={feature.image} alt="" title={feature.title}/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};