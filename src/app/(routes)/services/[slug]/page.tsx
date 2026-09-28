import ServiceDetailsWrapper from "@/entities/services/ServiceDetailsWrapper";
import {getServiceData} from "@/entities/services/Model/api";

interface IProps {
    params: Promise<{ slug: string }>;
}

export default async function DesignDetailsPage({ params }: IProps) {
    const { slug } = await params;
    const data = await getServiceData(slug)
    
    return (
        <ServiceDetailsWrapper data={data}/>
    );
}
