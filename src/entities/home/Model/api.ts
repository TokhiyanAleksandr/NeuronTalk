import NextFetchService from "@/shared/services/next.fetch.service";
import {HomeResponse} from "@/entities/home/Model/type";

export const getHomeData = (): Promise<HomeResponse> => {
    return NextFetchService.get(
        `/home`
    )
};