import {PaginatedResponse} from "@/shared/types/types";

export interface IService {
    id: number;
    title: string;
    subTitle: string;
    slug: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export type ServicesResponse = PaginatedResponse<IService>;