import { create } from "zustand";
import { ref, onValue } from "firebase/database";
import { database } from "@/firebase";

const useMovieStore = create((set) => ({
  movies: localStorage.getItem("moviecards-movies-database")
    ? JSON.parse(localStorage.getItem("moviecards-movies-database"))
    : null,
  getMovies: (userId) => {
    console.log(">>> Get movies from firebase: ", userId);
    const query = ref(database, userId);
    onValue(query, (snapshot) => {
      const fetchedData = snapshot.val();
      const moviesArray = Object.values(fetchedData.movies).slice().reverse();
      console.log(">>> movies fetched.");
      set({ movies: fetchedData ? moviesArray : [] });
      localStorage.setItem("moviecards-movies-database", JSON.stringify(moviesArray));
    });
  },
}));

export default useMovieStore;
