import NextFetchService from "@/shared/services/next.fetch.service";
import {IService, ServicesResponse} from "@/entities/services/Model/type";

export const getServicesData = (): Promise<ServicesResponse> => {
    return NextFetchService.get(
        `/services`
    )
};


export const getServiceData = (slug: string): Promise<IService> => {
    return NextFetchService.get(
        `/services/${slug}`
    )
};