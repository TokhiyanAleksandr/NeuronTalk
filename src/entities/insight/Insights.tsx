import {InsightCard} from "@/entities/insight/InsightCard";

export const Insights    = ({ insights }: { insights: any[] }) => {
    return (
        <section className="max-w-[1680px] m-auto px-6">
            <div className="flex justify-between items-end mb-20">
                <h2 className="serif text-[3.5rem] md:text-[5rem] leading-[0.9] font-medium tracking-tight">
                    Insights
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {insights.map((item, index) => (
                    <InsightCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};