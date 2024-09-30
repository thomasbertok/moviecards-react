import { create } from "zustand";
import { ref, onValue } from "firebase/database";
import { database } from "@/firebase";

const initialState = {
  movies: null,
};

const useMovieStore = create((set) => ({
  // initial state values for movies
  ...initialState,

  // set movies from firebase AND add to local storage
  setMovies: (userId) => {
    const query = ref(database, userId);
    onValue(query, (snapshot) => {
      const fetchedData = snapshot.val();

      if (!fetchedData) {
        console.log("!!! No snapshot found.");
        // TODO: maybe NULL would be better?
        set({ movies: [] });
        return null;
      }

      //console.log(">>> Store | Get movies from firebase for: ", userId);
      const moviesArray = Object.values(fetchedData.movies).slice().reverse();
      console.log(">>> Store | movies fetched.", moviesArray);
      // set state with movies
      set({ movies: fetchedData ? moviesArray : [] });
      // add movies to local storage
      localStorage.setItem("moviecards-movies-database", JSON.stringify(moviesArray));
    });
  },

  resetMovies: () => set(initialState),

  // movie search results
  searchResults: null,

  // set search results
  setSearchResults: (value) => set({ searchResults: value }),
}));

export default useMovieStore;
