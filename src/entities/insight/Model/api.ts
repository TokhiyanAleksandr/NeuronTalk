import NextFetchService from "@/shared/services/next.fetch.service";
import {Blog, BlogsResponse} from "@/entities/insight/Model/type";

export const getBlogsData = (): Promise<BlogsResponse> => {
    return NextFetchService.get(
        `/blogs`
    )
};


export const getBlog = (slug: string): Promise<Blog> => {
    return NextFetchService.get(
        `/blogs/${slug}`
    )
};