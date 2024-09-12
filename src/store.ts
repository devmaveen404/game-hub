import { create } from "zustand";

// Managing states using Zustand
interface GameQuery { // export to GameGrid.tsx
    genreId?: number //getting genre id instead of the the genre whole genre interface
    platformId?: number //Platform | null;
    sortOrder?: string;
    searchText?: string;
    consoleId?: number
}

interface GameQueryStore {
    gameQuery: GameQuery
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatfromId: (platfromId: number) => void
    setSortOrder: (sortOrder: string) => void
    setConsoleId: (consoleId: number) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId, consoleId: undefined } })),
    setPlatfromId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId, consoleId: undefined } })),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    setConsoleId: (consoleId) => set(store => ({ gameQuery: { ...store.gameQuery, consoleId, genreId: undefined, platformId: undefined } })),
}))

export default useGameQueryStore;