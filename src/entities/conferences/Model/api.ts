import NextFetchService from "@/shared/services/next.fetch.service";
import {ConferenceDetail, ConferencesResponse,IPaginatedResponse} from "@/entities/conferences/Model/type";

export const getConferencesData = (): Promise<ConferencesResponse> => {
    return NextFetchService.get(
        `/conferences`
    )
};

export const getConferenceData = (year: string): Promise<ConferenceDetail> => {
    return NextFetchService.get(
        // `/conferences/${year}/`
        `/conferences/${year}`
    )
};