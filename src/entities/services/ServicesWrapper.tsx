"use client";

import {HeadSection} from "@/shared/ui/headSection";
import {cubicBezier, motion} from "framer-motion";
import Image from "next/image";
import {SlideButton} from "@/shared/ui/slideButton";
import {ServicesResponse} from "@/entities/services/Model/type";

const transitionBase = {
    duration: 1.2,
    ease: cubicBezier(0.22, 1, 0.36, 1),
};

interface IProps {
    data: ServicesResponse;
}

const ServicesWrapper = ({data}: IProps) => {
    return (
        <div className="min-h-screen text-white pt-[80px] md:pt-[100px] overflow-x-hidden bg-black">

            <div className="mb-20 md:mb-[10rem] pt-[60px] md:pt-[100px]">

                <HeadSection
                    title="Services"
                    description="With our specialties, we offer solutions to communication issues from your organization."
                />

                <div className="flex flex-col">
                    {data?.data?.map((category, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={category.id}
                                className="grid grid-cols-1 xl:grid-cols-2 items-center min-h-[60vh] xl:min-h-screen"
                            >
                                <motion.div
                                    initial={{opacity: 0, y: 120}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, amount: 0.25}}
                                    transition={transitionBase}
                                    className={`relative w-full aspect-square xl:h-full overflow-hidden ${
                                        !isEven ? "xl:order-2" : ""
                                    }`}
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] hover:scale-110"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: isEven ? 80 : -80,
                                    }}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true, amount: 0.25}}
                                    transition={{
                                        ...transitionBase,
                                        delay: 0.15,
                                    }}
                                    className={`p-6 md:p-10 xl:p-24 flex flex-col justify-center ${
                                        !isEven ? "xl:order-1" : ""
                                    }`}
                                >
                                    <h2 className="text-2xl md:text-4xl xl:text-[3.5rem] serif font-medium mb-6">
                                        {category.title}
                                    </h2>

                                    <p className="text-base md:text-lg xl:text-[1.3rem] text-zinc-400 leading-relaxed max-w-xl">
                                        {category.description}
                                    </p>

                                    {/*<ul className="grid grid-cols-2 gap-x-10 gap-y-7 py-10">*/}
                                    {/*    {category.services.map((service) => (*/}
                                    {/*        <LearnMoreLink key={service} href="#">*/}
                                    {/*            {service}*/}
                                    {/*        </LearnMoreLink>*/}
                                    {/*    ))}*/}
                                    {/*</ul>*/}

                                    <div className="pt-6">
                                        <SlideButton href={`/services/${category.id}`}>
                                            View {category.title}
                                        </SlideButton>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesWrapper;