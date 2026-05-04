"use client";

import {Insights} from "@/entities/insight/Insights";
import { usePagination } from "@/shared/hooks/usePagination";
import {Blog, BlogsResponse} from "@/entities/insight/Model/type";
import Pagination from "@/shared/ui/pagination";

interface IProps {
    blogs: BlogsResponse<Blog>
}

export const InsightsList = ({ blogs }: IProps) => {
    const { data, fetchPage } = usePagination<BlogsResponse<Blog>>(blogs);
    const currentItems = data.data;

    return (
        <>
            <div className="flex flex-wrap gap-7">
                <Insights data={currentItems} />
            </div>


            <Pagination onPageChange={fetchPage} data={data} />

            {/*{blogs.length > ITEMS_PER_PAGE && (*/}
            {/*    <div className="flex justify-center items-center gap-4 mt-20">*/}
            {/*        <button*/}
            {/*            disabled={currentPage === 1}*/}
            {/*            onClick={() => setCurrentPage(prev => prev - 1)}*/}
            {/*            className="cursor-pointer px-4 py-2 border disabled:opacity-30 hover:bg-black hover:text-white transition-all"*/}
            {/*        >*/}
            {/*            Prev*/}
            {/*        </button>*/}

            {/*        {[...Array(totalPages)].map((_, i) => (*/}
            {/*            <button*/}
            {/*                key={i}*/}
            {/*                onClick={() => setCurrentPage(i + 1)}*/}
            {/*                className={`cursor-pointer w-10 h-10 border transition-all ${*/}
            {/*                    currentPage === i + 1 ? "bg-gray-400 text-white" : "bg-black text-white"*/}
            {/*                }`}*/}
            {/*            >*/}
            {/*                {i + 1}*/}
            {/*            </button>*/}
            {/*        ))}*/}

            {/*        <button*/}
            {/*            disabled={currentPage === totalPages}*/}
            {/*            onClick={() => setCurrentPage(prev => prev + 1)}*/}
            {/*            className="cursor-pointer px-4 py-2 border disabled:opacity-30 hover:bg-black hover:text-white transition-all"*/}
            {/*        >*/}
            {/*            Next*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*)}*/}
        </>
    );
};