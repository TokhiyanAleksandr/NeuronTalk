import ServicesWrapper from "@/entities/services/ServicesWrapper";
import {getServicesData} from "@/entities/services/Model/api";

const serviceCategories = [
    {
        id: "strategy",
        title: "Strategy",
        description: "Provides insight, explores and facilitates successful value propositions that connect people to brands.",
        image: "/strategy.jpg",
        services: ["Employer branding", "Brand Strategy", "Content strategy", "Digital Strategy", "Activation Strategy", "Sales Strategy", "Creative Strategy", "Business Strategy"],
    },
    {
        id: "digital",
        title: "Digital",
        description: "Develops innovative technology that increases the impact of digital communications and improves interaction.",
        image: "/digital.jpg",
        services: ["pim", "application", "Wordpress", "Seo And SEA", "Data Integration", "Customer Portals", "E-commerce", "Websites"],
    },
    {
        id: "design",
        title: "Design",
        description: "Brings brands to life by creatively translating them into optimal design for offline and online applications.",
        image: "/design.jpg",
        services: ["Motion design", "Graphic design ", "Ui/Ux Design", "Brand Design", "Design Templates", "Service Design", "Web Design", "Visual Identity"],
    },
    {
        id: "human",
        title: "Human",
        description: "Ensures the implementation of a communication strategy through personal insights and competency improvement.",
        image: "/human.jpeg",
        services: ["HBDI® profiles", "Workshops", "Moderating", "Sales Activation", "Onboarding", "Recruitment", "Training"],
    },
];



export default async function ServicesPage() {
    const data = await getServicesData()
    return (
        <ServicesWrapper data={data}/>
    );
}