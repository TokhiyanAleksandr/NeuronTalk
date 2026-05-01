"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import styles from './style.module.scss'
import {ParallaxGrid} from "@/shared/ui/ParallaxGrid";
import {Insights} from "@/entities/insight/Insights";

import { useParams } from "next/navigation";
import {useEffect, useState} from "react";

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
const projects = [
    {id: 1, title: "A new brand strategy to bring roof specialist Zoontjens to ‘higher grounds", category: "Zoontjens", img: "/services/design/project-1.jpeg", side: 'left'},
    {id: 2, title: "One name, one vision and one brand at the heart of construction and real estate", category: "Brink", img: " /services/design/project-2.jpg", side: 'right'},
];
const insights = [
    {
        id: 1,
        title: "How design thinking can redefine the future of construction",
        type:"News",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        side: 'left'
    },
    {
        id: 2,
        title: "The role of emotional intelligence in brand identity and architecture",
        type:"Blog",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        side: 'right'
    },
    {
        id: 3,
        title: "Why minimalism is the ultimate sophistication in digital space",
        type:"News",
        category: "Digital",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
        side: 'left'
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

export default function DesignServicesPage() {
    const { type } = useParams();

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (!type) return;

        getData(type as string).then((res) => setData(res));
    }, [type]);

    if (!data) {
        return <div className="p-10">Loading...</div>;
    }

    return (
        <>
            <div className="bg-[#FAE232] text-black px-[10px]">
                <div className="max-w-[1680px] m-auto  pt-[120px] ">
                    <div className="flex  h-[1000px] ">
                        <div className="pt-[50px] relative z-1 max-w-[1160px]">
                            <p className="mb-15 text-[21px] uppercase font-semibold tracking-[3px]">Design</p>
                            <h1 className="leading-20 text-black font-semibold   serif text-[80px]">
                                {data.hero.description}
                            </h1>
                            <p className="max-w-[825px] mt-15 text-[24px] font-medium">
                                We help you create an eye-catching way to distinguish your brand from others. For the
                                appearance
                                of companies, brands, associations, labels, products or services, we devise a unique way
                                to be
                                visible to target groups, to be recognized and to remain recognized.
                            </p>
                        </div>
                        <div className="w-[960px] h-[960px] absolute right-0">
                            <img src="/services/design/banner.jpg" alt="" title=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen min-h-[2150px] pt-[10rem] bg-linear-to-b from-[#FAE232] to-black">
                <div className="max-w-[1680px] m-auto">
                    <div className="flex justify-center items-center max-w-[420px] flex-col m-auto  text-center">
                        <h2 className="leading-[65px] font-semibold mb-15 text-[4.0rem] serif">Neuroscience as a
                            guide </h2>
                        <span className={styles.stripe}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="max-w-[672px] ">
                            <h3 className="serif font-semibold text-[40px] mb-[20px]">Bring brands to life</h3>
                            <p className="text-[21px] font-semibold">
                                A creative translation of your brand must be applicable online and offline. We know how
                                to make design plausible and attractive to different <Link className="underline"
                                                                                           href="#"> thinking
                                styles </Link>
                                in the brain. In this way we ensure that every means of communication and every message
                                reinforces your
                                <Link className="underline" href="#"> image </Link> in the market at all times.
                            </p>
                        </div>
                        <div className="w-[100%] max-w-[812px]">
                            <img src="/services/design/Breng-merken-tot-leven.png" alt="" title=""/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[5rem]">
                        <div className="w-[100%] max-w-[812px]">
                            <img src="/services/design/design-E.png" alt="" title=""/>
                        </div>
                        <div className="max-w-[672px] ">
                            <h3 className="serif font-semibold text-[40px] mb-[20px]">Bring brands to life</h3>
                            <p className="text-[21px] font-semibold">
                                Standing out is not difficult. Unless form and content must fit within existing
                                frameworks. Or have to fit seamlessly with your organization’s identity. In such cases,
                                we provide you with a unique story, a striking brand promise and an eye-catching <Link
                                className="underline"
                                href="#"> design </Link>. Effective creativity that pinpoints exactly what your brand
                                stands for.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-420 m-auto mb-40">
                <h2 className="serif font-semibold text-[3.75rem] mb-[2.5rem]">Design</h2>

                <div className=" grid grid-cols-4 gap-[20px] sm:grid-cols-2 lg:grid-cols-2">

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.15, duration: 0.6}}
                            className="flex flex-col"
                        >
                            <div
                                className="flex p-[2.5rem] min-h-[270px] justify-between items-center bg-[#FAE232] text-black">
                                <div className="h-[100%] justify-between flex flex-col">
                                    <h2 className="serif text-[2.125rem] font-semibold">{step.title}</h2>
                                    <p className="text-[20px] font-medium">{step.description}</p>
                                </div>
                                <div className="w-[55px] h-[50px] ">
                                    <img src="/arrow-right.svg" alt="" title=""/>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="max-w-420 m-auto mb-40">
                <div className="m-auto  text-center">
                    <h2 className="leading-[65px] font-semibold mb-15 text-[4.0rem] serif">
                        The best insights
                    </h2>
                    <span className={styles.stripe}/>
                </div>
                <div className="flex items-center justify-between">
                    <div className="max-w-[672px] ">
                        <h3 className="serif font-semibold text-[40px] mb-[20px]">Brand Monitor</h3>
                        <p className="text-[21px] font-semibold">
                            What makes your brand unique? What resources and stories do you need to have this? What
                            thinking
                            styles in the brain are you addressing with this? And which ones are you not addressing? We
                            map
                            this out with the Brand Monitor from BrainSells®, our
                            <Link className="underline" href="#"> method </Link> for approaching a communication issue
                            from different thinking
                            styles. This is how we determine what concept, message, means and design will provide the
                            best
                            results.
                        </p>
                    </div>
                    <div className="w-[100%] max-w-[812px]">
                        <img src="/services/design/Service-Design-diagram.png" alt="" title=""/>
                    </div>
                </div>

            </div>
            <div className="max-w-420 m-auto mb-40">
                {/*<ParallaxGrid projects={projects}/>*/}
            </div>

            {/*<Insights insights={insights}/>*/}
        </>

    );
}
