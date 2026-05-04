import NextFetchService from "@/shared/services/next.fetch.service";
import {HomeResponse, SettingsResponse} from "@/entities/home/Model/type";

export const getHomeData = (): Promise<HomeResponse> => {
    return NextFetchService.get(
        `/home`
    )
};

export const getSettings = (): Promise<SettingsResponse> => {
    return NextFetchService.get(
        `/settings`
    )
};