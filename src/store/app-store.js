import { create } from "zustand";
import { ref, onValue } from "firebase/database";
import { database } from "@/firebase";

const useMovieStore = create((set) => ({
  movies: [],
  fetchMovies: (userId) => {
    const query = ref(database, userId);
    onValue(query, (snapshot) => {
      const fetchedData = snapshot.val();
      const moviesArray = Object.values(fetchedData.movies).slice().reverse();
      set({ movies: fetchedData ? moviesArray : [] });
    });
  },
  setMovies: (newMovies, userId) => {
    const query = ref(database, userId);
    set({ movies: newMovies });
  },
}));

export default useMovieStore;
