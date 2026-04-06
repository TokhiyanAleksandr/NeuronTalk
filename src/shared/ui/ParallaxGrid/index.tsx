"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef, useState, useEffect} from "react";
import {HeadSection} from "@/shared/ui/headSection";
import {HeadTitle} from "@/shared/ui/headTile";

const PROJECTS_PER_PAGE = 10;

interface IProps {
    headTitle?: string,
    headSectionTitle?: string,
    headSectionDescription?: string,
    projects: any[],
    grayscale?: boolean
}

export const ParallaxGrid = ({
                                 projects,
                                 grayscale = false,
                                 headTitle,
                                 headSectionTitle,
                                 headSectionDescription
                             }: IProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const targetRef = useRef(null);

    const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
    const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
    const currentItems = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [currentPage]);

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const rightColumnY = useTransform(scrollYProgress, [0, 1], [300, -350]);

    const leftItems = currentItems.filter((_, i) => i % 2 === 0);
    const rightItems = currentItems.filter((_, i) => i % 2 !== 0);

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
                    {leftItems.map((project, index) => (
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
                    style={{y: typeof window !== 'undefined' && window.innerWidth > 768 ? rightColumnY : 0}}
                    className="flex flex-col gap-12"
                >
                    {rightItems.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isGrayscale={grayscale}
                        />
                    ))}
                </motion.div>
            </div>

            {projects.length > PROJECTS_PER_PAGE && (
                <div className="flex justify-center items-center gap-4 mt-20">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="cursor-pointer px-4 py-2 border disabled:opacity-30 hover:bg-black hover:text-white transition-all"
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`cursor-pointer w-10 h-10 border transition-all ${
                                currentPage === i + 1 ? "bg-gray-400 text-white" : "bg-black text-white"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="cursor-pointer px-4 py-2 border disabled:opacity-30 hover:bg-black hover:text-white transition-all"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

const ProjectCard = ({project, index, isGrayscale}: { project: any, index: number, isGrayscale: boolean }) => (
    <div className="group cursor-pointer w-full outline-none border-none">
        <div className="overflow-hidden  h-[100vw] w-full max-w-[810px] max-h-[810px] mx-auto relative border-none">
            <motion.img
                whileHover={{scale: 1.05}}
                transition={{duration: 0.8, ease: [0.33, 1, 0.68, 1]}}
                src={project.img}
                alt={project.title}
                loading={index < 2 ? "eager" : "lazy"}
                className={`w-full h-full object-cover transition-all duration-1000 block border-none outline-none ring-0
                    ${isGrayscale ? "grayscale group-hover:grayscale-0" : "grayscale-0"}
                `}
            />
        </div>
        <div className="mt-8 max-w-[810px] mx-auto px-2 md:px-0">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-semibold">
                {project.category}
            </p>
            <h3 className="serif font-semibold text-2xl md:text-3xl mt-3 tracking-tight">
                {project.title}
            </h3>
        </div>
    </div>
);