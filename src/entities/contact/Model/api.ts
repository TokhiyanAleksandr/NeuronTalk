import NextFetchService from "@/shared/services/next.fetch.service";
import { IContactFormRequest, IContactFormResponse } from "@/entities/contact/Model/type";

export const sendContactData = (
    data: IContactFormRequest
): Promise<IContactFormResponse> => {
    return NextFetchService.post<IContactFormResponse>(
        '/contact',
        data
    );
};