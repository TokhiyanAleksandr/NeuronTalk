"use client";

import { useState, useEffect } from "react";
import {Insights} from "@/entities/insight/Insights";
import {InsightCard} from "@/entities/insight/InsightCard";
// import { InsightCard } from "@/entities/insight/ui";

const ITEMS_PER_PAGE = 12;

interface IProps {
    insights: any[];
}

export const InsightsList = ({ insights }: IProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = insights.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(insights.length / ITEMS_PER_PAGE);

    // Скролл вверх при смене страницы как в вашем примере
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <>
            <div className="flex flex-wrap gap-7">
                <Insights insights={currentItems} />
            </div>

            {insights.length > ITEMS_PER_PAGE && (
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
        </>
    );
};