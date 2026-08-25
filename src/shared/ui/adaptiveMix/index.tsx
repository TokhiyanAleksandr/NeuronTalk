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
                <h2 className="max-w-[90%] md:max-w-[70%] m-auto mb-4 font-semibold leading-13.75 serif text-center text-[2rem] md:text-[3rem]">
                    {data?.title}
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
                {data?.data?.map((feature, index) => (
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
                        <div className="relative z-10 pt-8 md:pt-10 px-4 md:px-6 min-h-[200px] md:min-h-75">
                            <h3 className={`${colors[index].color} serif text-center font-semibold text-[1.8rem]`}>
                                {feature.title}
                            </h3>
                            <p className={`${colors[index].color} text-center font-medium text-[1.2rem] 2xl:my-0 my-4`}>
                                {feature.description}
                            </p>
                        </div>
                        <div className="m-auto">
                            <img src={feature.image} alt="" title={feature.title}/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};