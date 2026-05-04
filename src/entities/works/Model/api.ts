import NextFetchService from "@/shared/services/next.fetch.service";
import {ProjectsResponse, Project} from "@/entities/works/Model/type";

export const getProjectsData = async (): Promise<ProjectsResponse> => {
    return NextFetchService.get('/projects')
};