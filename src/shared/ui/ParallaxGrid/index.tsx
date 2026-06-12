'use client'

import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {HeadSection} from "@/shared/ui/headSection";
import {HeadTitle} from "@/shared/ui/headTile";
import ProjectCard from "@/entities/works/projectCard";
import {ProjectsResponse} from "@/entities/works/Model/type";


interface IProps {
    headTitle?: string,
    headSectionTitle?: string,
    headSectionDescription?: string,
    projects: ProjectsResponse,
    grayscale?: boolean
}

export const ParallaxGrid = ({
                                 projects,
                                 grayscale = false,
                                 headTitle,
                                 headSectionTitle,
                                 headSectionDescription
                             }: IProps) => {

    const currentItems = projects?.data ?? [];
    const targetRef = useRef<HTMLDivElement | null>(null);
    
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth > 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const rightColumnY = useTransform(scrollYProgress, [0, 1], [300, -350]);

    const leftItems = currentItems?.filter((_, i) => i % 2 === 0);
    const rightItems = currentItems?.filter((_, i) => i % 2 !== 0);

    return (
        <div ref={targetRef}>
            {
                (headSectionTitle && headSectionDescription) &&
                <HeadSection
                    title={headSectionTitle}
                    description={headSectionDescription}
                />
            }
            {
                headTitle &&
                <HeadTitle
                    title={headTitle}
                />
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col gap-12">
                    {leftItems?.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isGrayscale={grayscale}
                        />
                    ))}
                </div>

                <motion.div
                    suppressHydrationWarning
                    style={{ y: isDesktop ? rightColumnY : 0 }}
                    className="flex flex-col gap-12"
                >
                    {rightItems?.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isGrayscale={grayscale}
                        />
                    ))}
                </motion.div>
            </div>

        </div>
    );
};