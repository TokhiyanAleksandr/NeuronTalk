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

const Pagination = ({ data, onPageChange }: PaginationProps) => {
    if (data?.last_page <= 1) return null;

    const lastIndex = data?.links.length - 1;

    return (
        <div className="flex justify-center items-center gap-1 md:gap-2 mt-10 md:mt-20 flex-wrap">
            {data?.links?.map((link, i) => {
                let label = link.label;

                if (i === 0) label = "Previous";
                if (i === lastIndex) label = "Next";

                const disabled = !link.url;

                return (
                    <button
                        key={link.url ?? label + i}
                        disabled={disabled}
                        aria-disabled={disabled}
                        onClick={() => link.url && onPageChange(link.url)}
                        className={`px-4 py-2 border transition-all duration-200 ${
                            disabled
                                ? "opacity-30 cursor-not-allowed"
                                : link.active
                                    ? "bg-gray-400 text-white"
                                    : "bg-black text-white hover:bg-gray-800"
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