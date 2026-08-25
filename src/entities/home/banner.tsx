"use client";

import style from "./style.module.scss";
import { motion } from "framer-motion";
import { SlideButton } from "@/shared/ui/slideButton";
import { HomeResponse } from "@/entities/home/Model/type";

interface IProps {
    data: HomeResponse['banner'];
}

export const Banner = ({ data }: IProps) => {
    return (
        <div
            className={style.banner}
            style={{
                backgroundImage: data?.image ? `url(${data.image})` : undefined
            }}
        >
            <div className={style.leftContent}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className={style.title}
                >
                    {data?.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {data?.description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <SlideButton href={"/conversion-diagnostics"} bgColor={data?.button_color || "#141614"}>
                        {data?.button_title}
                    </SlideButton>
                </motion.div>
            </div>
        </div>
    );
};