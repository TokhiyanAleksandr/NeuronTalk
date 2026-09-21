import {InsightCard} from "@/entities/insight/InsightCard";
import {Blog} from "@/entities/insight/Model/type";

interface IProps {
    data: Blog[];
    title?: string;
}

export const Insights= ({ data, title }: IProps) => {
    const items = data ?? [];
    return (
        <section className="w-full max-w-[1680px] mx-auto px-4 sm:px-6">
            {/*<div className="flex justify-between items-end mb-10 md:mb-20">*/}
            {/*    <h2 className="serif text-3xl md:text-[5rem] leading-[0.9] font-medium tracking-tight">*/}
            {/*        {title}*/}
            {/*    </h2>*/}
            {/*</div>*/}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12">
                {items.map((item, index) => (
                    <InsightCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};