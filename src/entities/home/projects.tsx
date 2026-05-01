import {Section} from "@/shared/ui/section";
import {ParallaxGrid} from "@/shared/ui/ParallaxGrid";
import {HomeResponse} from "@/entities/home/Model/type";

interface IProps {
    data: HomeResponse['projects']
}

export const Projects = ({data}: IProps) => {
    return (
        <Section>
            <ParallaxGrid projects={data.data} grayscale={true}
                          headTitle={data.title}
            />
        </Section>
    );
};