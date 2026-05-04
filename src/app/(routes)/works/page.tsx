import { Metadata } from "next";
import {ParallaxGrid} from "@/shared/ui/ParallaxGrid";
import {Section} from "@/shared/ui/section";
import {MainSection} from "@/shared/ui/mainSection";
import {getProjectsData} from "@/entities/works/Model/api";
import ProjectsWrapper from "@/entities/works/projectsWrapper";


export const metadata: Metadata = {
    title: "Works | Neuron Talk",
    description: "...",
};

export default async function WorksPage() {
    const data = await getProjectsData()

    return (
        <MainSection>
            <Section>
                <ProjectsWrapper projects={data}/>
            </Section>
        </MainSection>
    );
}
