import {Metadata} from "next";
import {Section} from "@/shared/ui/section";
import {MainSection} from "@/shared/ui/mainSection";
import {HeadSection} from "@/shared/ui/headSection";
import {InsightsList} from "./insightsList";
import {getBlogsData} from "@/entities/insight/Model/api";

export const metadata: Metadata = {
    title: "Blog | NeurOn Talk",
    description: "Explore the latest articles on neural networks, machine learning, and artificial intelligence.",
};

export default async function InsightsPage({}) {
    const data = await getBlogsData();

    return (
        <MainSection>
            <Section>
                <HeadSection
                    // title={data?.title || "Insights"}
                    // description={data?.description || "Enrich yourself with our opinions, tips and downloads."}
                    title="Insights"
                    description="Understand Behavior. Design for Action"
                />

                {data?.data?.length > 0 ? (
                    <InsightsList blogs={data} />
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