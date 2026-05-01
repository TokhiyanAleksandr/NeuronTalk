"use client"

import style from "./style.module.scss";
import {motion} from "framer-motion";
import {SlideButton} from "@/shared/ui/slideButton";
import {HomeResponse} from "@/entities/home/Model/type";

interface IProps {
    data: HomeResponse['banner']
}

export const Banner = ({data}: IProps) => {
    return (
        <div className={style.banner}>
            <div className={style.leftContent}>
                <motion.h1
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: .5}}
                    className="serif"
                >
                    {data.title}
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: .5}}
                >
                    {data.subtitle}
                </motion.p>
                <motion.div
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: .5}}
                >
                    <SlideButton href={data.button_link || ""}>
                        {data.button_title}
                    </SlideButton>
                </motion.div>

            </div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .7}}
                className={style.imgContent}
            >
                <img src={data.image || ""} alt="Banner" title="Banner"/>
            </motion.div>
        </div>
    );
};