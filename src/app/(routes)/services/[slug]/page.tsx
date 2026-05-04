import {motion} from "framer-motion";
import Link from "next/link";
import styles from './style.module.scss'
import {ParallaxGrid} from "@/shared/ui/ParallaxGrid";
import {Insights} from "@/entities/insight/Insights";

import ServiceDetailsWrapper from "@/entities/services/ServiceDetailsWrapper";
import {getServiceData} from "@/entities/services/Model/api";
import {notFound} from "next/navigation";
// import {useEffect, useState} from "react";

const processSteps = [
    {
        title: "Motion design",
        description: "Grab attention with movement.",
    },
    {
        title: "Graphic design",
        description: "Design that you will recognize.",
    },
    {
        title: "UI/UX design",
        description: "Give visitors the best online experience.",
    },
    {
        title: "Brand design",
        description: "Distinctive design brings a brand to life.",
    },
    {
        title: "Design templates",
        description: "Making it your own. With the skills of the master.    ",
    },
    {
        title: "Service design",
        description: "Designs with the right tone for every customer contact.",
    },
    {
        title: "Web Design",
        description: "Online designs that allow you to create new opportunities.",
    },
    {
        title: "Visual Identity",
        description: "Looking on the outside like you are on the inside.",
    },
];


const DATA_BY_TYPE = {
    neuromarketing: {
        hero: {
            description:
                "We use neuroscience and behavioral psychology to increase conversions and influence user decisions.",
        },
        sectionTitle: "Neuromarketing Strategy",
        processSteps: [
            { title: "User Psychology", description: "Understand subconscious behavior patterns." },
            { title: "Emotional Triggers", description: "Identify what drives decisions." },
            { title: "Conversion Optimization", description: "Turn insights into revenue." },
            { title: "A/B Testing", description: "Validate behavior-driven changes." },
        ],
        projects: [
            {
                id: 1,
                title: "Neuromarketing for E-commerce Growth",
                category: "Psychology",
                img: "/services/design/project-1.jpeg",
                side: "left",
            },
        ],
        insights: [
            {
                id: 1,
                title: "How emotions drive 90% of decisions",
                type: "News",
                category: "Behavior",
                image:
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
                side: "left",
            },
        ],
    },

    website: {
        hero: {
            description:
                "We build fast, scalable and modern websites that convert visitors into customers.",
        },
        sectionTitle: "Website Creation",
        processSteps: [
            { title: "UX Planning", description: "Define user flow and structure." },
            { title: "UI Design", description: "Create modern interfaces." },
            { title: "Development", description: "Build high-performance websites." },
            { title: "Optimization", description: "Improve speed and SEO." },
        ],
        projects: [
            {
                id: 1,
                title: "Luxury Real Estate Website",
                category: "Web",
                img: "/services/design/project-2.jpg",
                side: "right",
            },
        ],
        insights: [
            {
                id: 1,
                title: "Why website speed affects conversion rate",
                type: "Blog",
                category: "Web",
                image:
                    "https://images.unsplash.com/photo-1497366216548-37526070297c",
                side: "right",
            },
        ],
    },

    uiux: {
        hero: {
            description:
                "We design intuitive interfaces focused on usability and product growth.",
        },
        sectionTitle: "UX/UI Design",
        processSteps: [
            { title: "Research", description: "Understand user needs." },
            { title: "Wireframes", description: "Create structure." },
            { title: "UI Design", description: "Design clean interfaces." },
            { title: "Testing", description: "Improve usability." },
        ],
        projects: [
            {
                id: 1,
                title: "Mobile Banking App UX",
                category: "Fintech",
                img: "/services/design/project-1.jpeg",
                side: "left",
            },
        ],
        insights: [
            {
                id: 1,
                title: "Why UX is more important than UI",
                type: "Blog",
                category: "UX",
                image:
                    "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
                side: "left",
            },
        ],
    },

    ai: {
        hero: {
            description:
                "We build AI systems that automate workflows and scale business performance.",
        },
        sectionTitle: "AI Automation & Growth",
        processSteps: [
            { title: "Data Collection", description: "Analyze business data." },
            { title: "AI Models", description: "Build predictive systems." },
            { title: "Automation", description: "Automate workflows." },
            { title: "Scaling", description: "Increase efficiency." },
        ],
        projects: [
            {
                id: 1,
                title: "AI Marketing Automation System",
                category: "AI",
                img: "/services/design/project-2.jpg",
                side: "right",
            },
        ],
        insights: [
            {
                id: 1,
                title: "How AI is changing marketing",
                type: "News",
                category: "AI",
                image:
                    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
                side: "right",
            },
        ],
    },
};


const getData = async (type: string) => {
    await new Promise((res) => setTimeout(res, 300));

    fetch(`http://localhost:3000/api/services/${type}`)
        .then(res => res.json())
        .then(data => data)

    return DATA_BY_TYPE[type as keyof typeof DATA_BY_TYPE] || DATA_BY_TYPE.ai;
};

interface IProps {
    params: Promise<{ slug: string }>;
}

export default async function DesignDetailsPage({ params }: IProps) {
    const { slug } = await params;
    const data = await getServiceData(slug)
    
    return (
        <ServiceDetailsWrapper data={data}/>
    );
}
