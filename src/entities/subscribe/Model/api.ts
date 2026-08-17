import NextFetchService from "@/shared/services/next.fetch.service";
import {
    ISubscribeRequest,
    ISubscribeResponse,
} from "./type";

export const subscribeEmail = (
    data: ISubscribeRequest
): Promise<ISubscribeResponse> => {
    return NextFetchService.post<ISubscribeResponse>(
        "/subscribe",
        data
    );
};