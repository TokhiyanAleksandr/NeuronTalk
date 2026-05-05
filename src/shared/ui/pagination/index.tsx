import React from "react";

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationProps {
    data: {
        last_page: number;
        links: Link[];
    };
    onPageChange: (url: string) => void;
}

const Pagination = ({data, onPageChange}: PaginationProps) => {
    if (data?.last_page <= 1) return null;
    const lastIndex = data?.links.length - 1;

    return (
    <div className="flex justify-center items-center gap-2 mt-20 flex-wrap">
        {data?.links?.map((link, i) => {
            let label = link.label;

            if (i === 0) label = "Previous";
            if (i === lastIndex) label = "Next";

            return (
                <button
                    key={i}
                    disabled={!link.url}
                    onClick={() => link.url && onPageChange(link.url)}
                    className={`px-4 py-2 border transition-all ${
                        link.active
                            ? "bg-gray-400 text-white"
                            : "bg-black text-white disabled:opacity-30"
                    }`}
                >
                    {label}
                </button>
            );
        })}
    </div>
    );
};

export default Pagination;