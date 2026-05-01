import NextFetchService from "@/shared/services/next.fetch.service";
import {Blog, BlogsResponse} from "@/entities/insight/Model/type";

export const getBlogsData = (): Promise<BlogsResponse<Blog>> => {
    return NextFetchService.get(
        `/blogs`
    )
};