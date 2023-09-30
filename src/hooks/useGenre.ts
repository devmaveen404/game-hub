// 12(b), Custom hook for fetching genres
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-clients";
import useData from "./useData";

export interface Genre {
   id: number;
   name: string;
   image_background: string;
}
// FetchGenreResponse has been defined as a generic interface in useData.tsx 
// interface FetchGenresResponse {
//   count: number;
//   results: Genre[]
// }
// fetching genre
// const useGenre = () => useData<Genre>("./genres")


// 23, shipping static genre data 
import GenreData from "../Data/GenreData";
const useGenre = () => ({data: GenreData, isLoading: false, error: null })

export default useGenre