import { create } from "zustand";

interface SidebarState {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
    isSidebarOpen: false, // initial state
    openSidebar: () => set({ isSidebarOpen: true }),
    closeSidebar: () => set({ isSidebarOpen: false }),
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));