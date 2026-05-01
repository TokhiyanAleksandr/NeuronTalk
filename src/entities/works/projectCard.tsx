"use client";

import { motion } from "framer-motion";
import {Project} from "@/entities/works/Model/type";

const ProjectCard = ({project, index, isGrayscale}: { project: Project, index: number, isGrayscale: boolean }) => (
    <div className="group cursor-pointer w-full outline-none border-none">
        <div className="overflow-hidden  h-[100vw] w-full max-w-[810px] max-h-[810px] mx-auto relative border-none">
            <motion.img
                whileHover={{scale: 1.05}}
                transition={{duration: 0.8, ease: [0.33, 1, 0.68, 1]}}
                src={project.image || ""}
                alt={project.title}
                loading={index < 2 ? "eager" : "lazy"}
                className={`w-full h-full object-cover transition-all duration-1000 block border-none outline-none ring-0
                    ${isGrayscale ? "grayscale group-hover:grayscale-0" : "grayscale-0"}
                `}
            />
        </div>
        <div className="mt-8 max-w-[810px] mx-auto px-2 md:px-0">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gray-400 font-semibold">
                {"project.category"}
            </p>
            <h3 className="serif font-semibold text-2xl md:text-3xl mt-3 tracking-tight">
                {project.title}
            </h3>
        </div>
    </div>
);

export default ProjectCard;