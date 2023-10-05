import PlatformData from "../Data/PlatformData";
import APIClients from "../services/api-clients";
import useData from "./useData";
import { FetchResponse } from "../services/api-clients";
import { useQuery } from "@tanstack/react-query"


const apiClient = new APIClients<Platform>('/platforms/lists/parents');

// 16, fetching data for platforms
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// 24
// Fetch platforms with react query
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,  // .get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000,
  initialData: {count: PlatformData.length, results: PlatformData},
})

export default usePlatforms;
