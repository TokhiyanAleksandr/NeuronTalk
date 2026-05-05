import {InsightCard} from "@/entities/insight/InsightCard";
import {Blog} from "@/entities/insight/Model/type";

interface IProps {
    data: Blog[];
    title?: string;
}

export const Insights= ({ data, title }: IProps) => {
    return (
        <section className="max-w-[1680px] m-auto px-6">
            <div className="flex justify-between items-end mb-20">
                <h2 className="serif text-[3.5rem] md:text-[5rem] leading-[0.9] font-medium tracking-tight">
                    {title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {data?.map((item, index) => (
                    <InsightCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};