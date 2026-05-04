import {PaginatedResponse} from "@/shared/types/types";

export type Blog = {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: string | null;
    created_at: string;
    updated_at: string;
    type: string;
};

export type BlogsResponse = PaginatedResponse<Blog>;