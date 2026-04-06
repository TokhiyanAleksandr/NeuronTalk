"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export function LearnMoreLink({children="Learn More",href="#", className}: {children: React.ReactNode, href: string,className?:string}) {
    return (
        <MotionLink
            href={href}
            initial="initial"
            whileHover="hover"
            className={` group relative inline-flex items-center text-white font-bold uppercase tracking-[0.3em] text-[14px] pb-3 ${className} `}
        >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white/80">
        {children}
      </span>

            <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-white/20" />

                <motion.div
                    variants={{
                        initial: { scaleX: 1 },
                        hover: { scaleX: 0 },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.19, 1, 0.22, 1],
                    }}
                    style={{
                        originX: 1,
                        backgroundColor: "white",
                    }}
                    className="absolute inset-0"
                />
            </div>

            <motion.span
                variants={{
                    initial: { x: -10, opacity: 0 },
                    hover: { x: 5, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="ml-2"
            >
                →
            </motion.span>
        </MotionLink>
    );
}