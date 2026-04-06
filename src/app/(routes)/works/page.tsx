import { Metadata } from "next";
import {ParallaxGrid} from "@/shared/ui/ParallaxGrid";
import {Section} from "@/shared/ui/section";
import {MainSection} from "@/shared/ui/mainSection";


export const metadata: Metadata = {
    title: "Works | Neuron Talk",
    description: "...",
};

export default async function WorksPage() {
    const projects = [
        {id: 1, title: "Creating flow, radiating flow with DCT", category: "Branding", img: "/works/project-1.webp", side: 'left'},
        {id: 2, title: "A new identity for PXL where the chemistry between brand and people merges", category: "Design", img: "/works/project-2.webp", side: 'right'},
        {id: 3, title: "A new website for CC7 Europe — where technology and people come together", category: "Strategy", img: "/works/project-3.webp", side: 'left'},
        {id: 4, title: "From fragmented network to powerful brand", category: "Development", img: "/works/project-4.webp", side: 'right'},
        {id: 5, title: "Employer branding with a whole brain approach", category: "Development", img: "/works/project-5.webp", side: 'right'},
        {id: 6, title: "New website IFS Ultimo. Bolder. Completely new UX experience", category: "Development", img: "/works/project-6.webp", side: 'right'},
        {id: 7, title: "Care and talent united like never before — thanks to Medigo’s new website", category: "Development", img: "/works/project-7.png", side: 'right'},
        {id: 8, title: "New brand identity and website for Softhouse", category: "Development", img: "/works/project-8.webp", side: 'right'},
        {id: 9, title: "Monumental branding for the launch of Archey", category: "Development", img: "/works/project-9.webp", side: 'right'},
        {id: 10, title: "Identity design with a royal upgrade for Van Beest", category: "Development", img: "/works/project-10.png", side: 'right'},
        {id: 11, title: "Fresh corporate branding for publicly traded IT company Ctac", category: "Development", img: "/works/project-11.webp", side: 'right'},
        {id: 12, title: "Yune: outsmarted security in one smart ecosystem", category: "Development", img: "/works/project-12.webp", side: 'right'},
        {id: 13, title: "Branding and positioning for Nautus", category: "Development", img: "/works/project-14.webp", side: 'right'},
        {id: 15, title: "Luxury brand experience for superyacht builder Oceanco", category: "Development", img: "/works/project-15.webp", side: 'right'},
        {id: 16, title: "Strategy and value creation for Excelsior Rotterdam", category: "Development", img: "/works/project-16.webp", side: 'right'},
        {id: 17, title: "UX and UI design automotive procurement platform Parts360", category: "Development", img: "/works/project-17.webp", side: 'right'},
        {id: 18, title: "New website design in support of the new strategic design of Nautus", category: "Development", img: "/works/project-18.webp", side: 'right'},
        {id: 19, title: "Web Design for Financial Study Association Rotterdam (FSR) and Career Platform (FCP)", category: "Development", img: "/works/project-19.webp", side: 'right'},
    ];

    return (
        <MainSection>
            <Section>
                <ParallaxGrid projects={projects}
                              headSectionTitle="Works"
                              headSectionDescription="Our projects, from strategy to execution. With measurable results."
                />
            </Section>
        </MainSection>
    );
}
