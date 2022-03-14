import axios from 'axios';

import { ApiResponse, SearchParam } from "../interfaces/type";

const key = "5f79a44d-57a6-4db8-9a76-070fc2d12b18";

const BASE_URL: string = `https://jooble.org/api/${key}`;


// search jobs
export const searchJobs = async (params: SearchParam): Promise<ApiResponse> => {
    const jobs: ApiResponse = await axios.post(`${BASE_URL}`, params);
    return jobs;
}
