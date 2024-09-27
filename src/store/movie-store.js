import { create } from "zustand";
import { ref, onValue } from "firebase/database";
import { database } from "@/firebase";

const initialState = {
  movies: null,
};

const useMovieStore = create((set) => ({
  ...initialState,
  setMovies: (userId) => {
    const query = ref(database, userId);
    onValue(query, (snapshot) => {
      const fetchedData = snapshot.val();

      if (!fetchedData) {
        console.log("!!! No snapshot found.");
        set({ movies: [] });
        return null;
      }

      console.log(">>> Store | Get movies from firebase for: ", userId);
      const moviesArray = Object.values(fetchedData.movies).slice().reverse();
      console.log(">>> Store | movies fetched.", moviesArray);
      set({ movies: fetchedData ? moviesArray : [] });
      //localStorage.setItem("moviecards-movies-database", JSON.stringify(moviesArray));
    });
  },

  resetMovies: () => set(initialState),
}));

export default useMovieStore;
