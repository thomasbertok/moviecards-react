import { create } from "zustand";

export const useStore = create((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
}));
