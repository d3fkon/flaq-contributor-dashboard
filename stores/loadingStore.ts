import create from 'zustand';

export interface LoadingState {
  isLoading: boolean;
  toggleLoading: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}));

export default useLoadingStore;
