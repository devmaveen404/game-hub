// 26, since reactquery is used the dataquery is no longer used !!!

// 13, create a generic data fetching hook, goto useGames.tsx
import { useEffect, useState } from "react";
import apiClient, { CanceledError, FetchResponse } from "../services/api-clients";
import {AxiosRequestConfig} from 'axios' // to filter by genre when fetching games

// export interface FetchResponse<T> {
//   count: number;
//   results: T[]
// }
                                      // to filter games
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  // 10, Loading skeletons
  const [isLoading, setLoading] = useState(false)

  // 5b
  // useEffect to send request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then(res => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
       });

    return () => controller.abort()
  }, deps ? [...deps] : []);

  return { data, error, isLoading }
}

export default useData // render in GenreList.tsx