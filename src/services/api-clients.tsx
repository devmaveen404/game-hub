// 5, fetching games
import axios, { CanceledError } from "axios"
import {AxiosRequestConfig} from 'axios'


export interface FetchResponse<T> {
    count: number;
    results: T[]
  }

// 26, creating reusable API Client
const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "03b82b74e0454e0f869bee378eb23bee"
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }
  }

export { CanceledError }
export default APIClient;