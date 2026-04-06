import {getInsights} from "@/entities/insight/api";
import {Metadata} from "next";
import {Section} from "@/shared/ui/section";
import {MainSection} from "@/shared/ui/mainSection";
import {HeadSection} from "@/shared/ui/headSection";
import {InsightsList} from "./insightsList"; // Импортируйте созданный выше компонент

export const metadata: Metadata = {
    title: "Blog | Neuron Talk",
    description: "Explore the latest articles on neural networks, machine learning, and artificial intelligence.",
};

export default async function InsightsPage({}) {
    const insights = await getInsights();

    return (
        <MainSection>
            <Section>
                <HeadSection
                    title="Insights"
                    description="Enrich yourself with our opinions, tips and downloads."
                />

                {insights.length > 0 ? (
                    <InsightsList insights={insights} />
                ) : (
                    <div className="py-12 text-center">
                        <p className="serif text-[2rem]">
                            No posts yet.
                        </p>
                    </div>
                )}
            </Section>
        </MainSection>
    );
}