import { Console } from "../entities/Console";
import APIClient from "../services/api-clients"
import { useQuery } from '@tanstack/react-query'

const apiClient = new APIClient<Console>('/platforms');


const useConsole = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //fetched data stays in cache for 24hrs
})


export default useConsole