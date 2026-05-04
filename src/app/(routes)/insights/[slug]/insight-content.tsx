"use client";

import {motion} from "framer-motion";
import Link from "next/link";

import {MainSection} from "@/shared/ui/mainSection";
import {Section} from "@/shared/ui/section";
import {HeadSection} from "@/shared/ui/headSection";
import {Blog} from "@/entities/insight/Model/type";

interface InsightContentProps {
    insight: Blog;
}

export function InsightContent({insight}: InsightContentProps) {

    return (
        <MainSection>
            <Section>
                <div className="relative text-white">
                    <HeadSection
                        title={"insight.category"}
                        description={insight.title}
                        descriptionClassName="text-[4.3rem] font-medium"
                        className="max-w-[85%] text-left m-0"
                    />
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.4}}
                        className="absolute right-0 top-0"
                    >
                        <Link
                            href="/insights"
                            className="text-[1rem] mb-8 inline-flex items-center gap-2 text-sm font-medium "
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Back to the Insights
                        </Link>
                    </motion.div>
                </div>


                <div className="mt-[30px] flex justify-between items-center">
                    <div className=" flex flex-wrap gap-x-[30px]">
                        <div className="flex flex-col gap-y-[10px] mb-[20px]">
                            <p className="text-[1rem] font-medium">Autor</p>
                            <h4 className="serif text-[1.6rem] font-semibold">{"insight.author"}</h4>
                        </div>
                        <div className="flex flex-col gap-y-[10px] mb-[20px]">
                            <p className="text-[1rem] font-medium">Date</p>
                            <h4 className="serif text-[1.6rem] font-semibold">
                                {new Date(insight.created_at).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </h4>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800">
                            <svg
                                className="mr-2 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                            Like
                        </button>
                        <button
                            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800">
                            <svg
                                className="mr-2 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                />
                            </svg>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-[10px] mb-[20px]">
                    <p className="text-[1rem] font-medium">Keywords</p>
                    {/*<div className="flex gap-x-[15px]">*/}
                    {/*    {*/}
                    {/*        insight.keywords?.map((item, index) => {*/}
                    {/*            return (*/}
                    {/*                <div className="bg-[#343434] py-[3px] px-[10px] text-[1.2rem] font-semibold"*/}
                    {/*                     key={index}>{item}</div>*/}
                    {/*            )*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
                <div>
                    <img src={insight.image || ""} alt="" title=""/>
                </div>
            </Section>
        </MainSection>
    );
}
