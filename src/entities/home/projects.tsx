import {Section} from "@/shared/ui/section";
import {ParallaxGrid} from "@/shared/ui/ParallaxGrid";

const projects = [
    {id: 1, title: "Project One", category: "Branding", img: "/Excelsior-Square-1_opt.webp", side: 'left'},
    {id: 2, title: "Project Two", category: "Design", img: "/NAPA-Square-1_opt.webp", side: 'right'},
    {id: 3, title: "Project Three", category: "Strategy", img: "/Oceanco-Square_opt-1.webp", side: 'left'},
    {id: 4, title: "Project Four", category: "Development", img: "/thumb-ctac_make_design-by-wadm.png", side: 'right'},
];

export const Projects = () => {
    return (
        <Section>
            <ParallaxGrid projects={projects} grayscale={true}
                          headTitle="Projects"
            />
        </Section>
    );
};