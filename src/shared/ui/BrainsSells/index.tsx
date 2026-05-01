"use client";

import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useState, useCallback} from "react";
import {SlideButton} from "@/shared/ui/slideButton";
import {HomeResponse} from "@/entities/home/Model/type";

const DURATION_MS = 5000;


function OrbitDot({isActive, animationKey, color}: { isActive: boolean; animationKey: any; color: string }) {
    const size = 26;
    const stroke = 2.5;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;

    return (
        <div className="relative h-7 w-7 shrink-0">
            <svg width={size} height={size} className="absolute inset-0">
                <circle cx={size / 2} cy={size / 2} r={r} stroke="white" strokeWidth={stroke} fill="none"
                        opacity="0.1"/>
                {isActive && (
                    <motion.circle
                        key={animationKey}
                        cx={size / 2} cy={size / 2} r={r}
                        stroke={color} strokeWidth={stroke}
                        fill="none" strokeLinecap="round" strokeDasharray={c}
                        initial={{strokeDashoffset: c}}
                        animate={{strokeDashoffset: 0}}
                        transition={{duration: DURATION_MS / 1000, ease: "linear"}}
                        style={{rotate: -90, transformOrigin: "center"}}
                    />
                )}
            </svg>
            <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full right-[1.2px] top-[-1.4px]"/>
        </div>
    );
}

interface IProps  {
    data: HomeResponse['methodology']
}

export function BrainsSells({data}: IProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const [cumulativeStep, setCumulativeStep] = useState(0);
    const [tick, setTick] = useState(0);

    const handleNext = useCallback(() => {
        setCumulativeStep((prev) => prev + 1);
        setActiveIndex((prev) => (prev + 1) % data.data.length);
        setTick((t) => t + 1);
    }, []);

    useEffect(() => {
        const timer = setTimeout(handleNext, DURATION_MS);
        return () => clearTimeout(timer);
    }, [tick, handleNext]);

    const handleStepClick = (index: number) => {
        if (index === activeIndex) return;

        let diff = index - activeIndex;
        if (diff < 0) {
            diff += data.data.length;
        }

        setCumulativeStep((prev) => prev + diff);
        setActiveIndex(index);
        setTick((t) => t + 1);
    };

    return (
        <section className="mb-46 bg-[#1e1e1e] py-24 text-white overflow-hidden relative">
            <div
                className="relative z-1 max-w-210 m-auto mb-[150px] flex justify-center flex-col items-center text-center px-[15px]">
                <p className="text-[1rem] font-semibold">{data.title}</p>
                <h2 className="serif mb-[1rem] text-[3.75rem] font-semibold">{data.subtitle}</h2>
                <p className="font-medium text-[1.3rem] mb-[1rem]">
                    {data.description}
                </p>
                <SlideButton href={data.button_link || ''}>{data.button_title}</SlideButton>
            </div>

            <div className="relative z-1 max-w-420 m-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

                    <div className="flex justify-center relative">
                        <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">

                            <svg viewBox="0 0 100 100" className="absolute w-full h-full transform -rotate-45">
                                <circle cx="50" cy="50" r="48" fill="#333333" />
                            </svg>

                            <motion.div
                                animate={{ rotate: cumulativeStep * 90 }}
                                transition={{ type: "spring", stiffness: 35, damping: 15 }}
                                className="w-full h-full relative z-10"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-45">
                                    {data.data.map((step, i) => {
                                        const isActive = i === activeIndex;
                                        return (
                                            <motion.path
                                                key={step.id}
                                                d="M 50,50 L 50,2 A 48,48 0 0,1 98,50 Z"
                                                fill={step.color}
                                                initial={false}
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    scale: isActive ? 1.02 : 1,
                                                }}
                                                transition={{ duration: 0.4 }}
                                                transform={`rotate(${i * 90} 50 50)`}
                                                style={{ cursor: 'pointer', transformOrigin: 'center' }}
                                                onClick={() => handleStepClick(i)}
                                            />
                                        );
                                    })}
                                </svg>
                            </motion.div>

                            <div className="absolute inset-0 m-auto w-[52%] h-[52%] rounded-full bg-[#111] z-20 flex flex-col items-center justify-center border border-white/5 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                                <div className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-bold">Method</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {data.data.map((step, i) => {
                            const isOpen = i === activeIndex;
                            return (
                                <div key={step.id}>
                                    <button
                                        onClick={() => handleStepClick(i)}
                                        className="cursor-pointer w-full py-1 flex items-center gap-6 text-left group"
                                    >
                                        <OrbitDot isActive={isOpen} animationKey={tick} color={step.color}/>
                                        <h3 className={`serif text-[2.125rem] transition-all duration-700 ${isOpen ? "text-white" : "text-white/20 group-hover:text-white/40"}`}>
                                            {step.title}
                                        </h3>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{height: 0, opacity: 0}}
                                                animate={{height: "auto", opacity: 1}}
                                                exit={{height: 0, opacity: 0}}
                                                transition={{duration: 0.5, ease: [0.19, 1, 0.22, 1]}}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-10 pl-[52px] pr-4">
                                                    <p className="text-xl md:text-2xl font-medium text-white mb-4 leading-tight">
                                                        {step.subtitle}
                                                    </p>
                                                    <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="w-220 h-220 absolute right-0 top-0 pointer-events-none">
                <img src="/brainsells-brain.jpg" alt="Brain" className="opacity-50"/>
            </div>
        </section>
    );
}