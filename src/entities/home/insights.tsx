// "use client";
//
// import { HeadTitle } from "@/shared/ui/headTile";
// import { Section } from "@/shared/ui/section";
// import { InsightCard } from "@/entities/insight/ui";
//
// interface InsightsProps {
//     data: any[];
// }
//
// export const Insights = ({ data }: InsightsProps) => {
//     // Берем только 3 элемента
//     const latestInsights = data?.slice(0, 3) || [];
//     console.log(data, 'data')
//     return (
//         <Section>
//             <HeadTitle title="Insights"/>
//             <div className="flex flex-wrap gap-7 mt-12">
//                 {latestInsights.map((insight, index) => (
//                     <InsightCard
//                         {...insight}
//                         key={insight.id || index}
//                     />
//                 ))}
//             </div>
//         </Section>
//     );
// };