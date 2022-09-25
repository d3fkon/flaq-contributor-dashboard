<<<<<<< HEAD
import create from "zustand";
=======
import create from 'zustand';
>>>>>>> d04b438 (prettier setup and formating with it)

export interface LoadingState {
  isLoading: boolean;
  toggleLoading: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}));

export default useLoadingStore;
