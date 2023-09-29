import useData from "./useData";

// 16, fetching data for platforms
interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;