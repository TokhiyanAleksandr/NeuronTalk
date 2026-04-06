"use client"

import style from "./style.module.scss";
import {motion} from "framer-motion";
import {SlideButton} from "@/shared/ui/slideButton";



export const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.leftContent}>
                <motion.h1
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: .5}}
                    className="serif"
                >
                    Grow your brand to its maximum potential.
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: .5}}
                >
                    As a B2B branding agency, we combine knowledge of the human brain with business insight to
                    create powerful B2B brand experiences. Discover how we can add significant value to your brand.
                </motion.p>
                <motion.div
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: .5}}
                >
                    <SlideButton href="#">
                        More about our way of working
                    </SlideButton>
                </motion.div>

            </div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .7}}
                className={style.imgContent}
            >
                <img src="/banner.webp" alt="Banner" title="Banner"/>
            </motion.div>
        </div>
    );
};