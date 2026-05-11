import {ClientsMarquee} from "@/shared/ui/ClientMarquee";
import {BrainsSells} from "@/shared/ui/BrainsSells";
import {AdaptiveMix} from "@/shared/ui/adaptiveMix";
import {Banner, Projects} from "@/entities/home";
import {MainSection} from "@/shared/ui/mainSection";
import {DigitalExperts} from "@/entities/home/digitalExperts";
import {DifferentBrains} from "@/entities/home/differentBrains";
import {Insights} from "@/entities/insight/Insights";
import {getHomeData} from "@/entities/home/Model/api";


export default async function Home() {
    const {banner, partners, services, projects, methodology, blogs, get_in_touch} = await getHomeData();
    const insightsData = blogs?.data?.slice(0, 3);
    return (
        <MainSection>
            <div>
                <Banner data={banner}/>
                <ClientsMarquee data={partners}/>
                <AdaptiveMix data={services}/>
                <Projects data={projects}/>
                <BrainsSells data={methodology}/>
                <Insights data={insightsData} title={blogs?.title}/>
                {/*<DigitalExperts/>*/}
                <DifferentBrains data={get_in_touch}/>
            </div>
        </MainSection>
    )
        ;
}
