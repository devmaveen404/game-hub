import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-clients";

interface Genre {
   id: number;
   name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[]
}

const useGenre = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  // 10, Loading skeletons
  const [isLoading, setLoading] = useState(false)

  // 5b
  // useEffect to send request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal})
      .then(res => {
        setGenre(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
       });

    return () => controller.abort()
  }, []);

  return {genres, error, isLoading}
}

export default useGenre