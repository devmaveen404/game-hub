import { create } from "zustand";

// Managing states using Zustand
interface GameQuery { // export to GameGrid.tsx
    genreId?: number //getting genre id instead of the the genre whole genre interface
    platformId?: number //Platform | null;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatfromId: (platfromId: number) => void
    setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText }})),
    setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId}})),
    setPlatfromId: (platformId) => set(store => ({ gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (searchText) => set(store => ({ gameQuery: {...store.gameQuery, searchText}}))
}))

export default useGameQueryStore;