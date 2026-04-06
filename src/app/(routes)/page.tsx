
import {ClientsMarquee} from "@/shared/ui/ClientMarquee";
import {BrainsSells} from "@/shared/ui/BrainsSells";
import {AdaptiveMix} from "@/shared/ui/adaptiveMix";
import {Banner, Projects} from "@/entities/home";
import {MainSection} from "@/shared/ui/mainSection";
import {DigitalExperts} from "@/entities/home/digitalExperts";
import {OurServices} from "@/entities/home/ourServices";
import {DifferentBrains} from "@/entities/home/differentBrains";
import {Insights} from "@/entities/insight/Insights";


export default function Home() {
    const insights = [
        {
            id: 1,
            title: "How design thinking can redefine the future of construction",
            type:"Blog",
            category: "Strategy",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            side: 'left'
        },
        {
            id: 2,
            title: "The role of emotional intelligence in brand identity and architecture",
            type:"News",
            category: "Branding",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            side: 'right'
        },
        {
            id: 3,
            title: "Why minimalism is the ultimate sophistication in digital space",
            type:"Blog",
            category: "Digital",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
            side: 'left'
        },
    ];
    return (
        <MainSection>
            <div>
                <Banner/>
                <ClientsMarquee/>
                <AdaptiveMix/>
                <Projects/>
                <BrainsSells/>
                <Insights insights={insights}/>
                <DigitalExperts/>
                <OurServices/>
                <DifferentBrains/>
            </div>
        </MainSection>
    )
        ;
}
