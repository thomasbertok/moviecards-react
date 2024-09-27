import { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/auth/AuthContext";
import MovieGrid from "@/components/MovieGrid";
import useMovieStore from "@/store/movie-store";
import LoadingIcons from "react-loading-icons";

const MoviesList = () => {
  // get user context
  const { user } = useContext(AuthContext);
  // loading state
  const [loading, setLoading] = useState(false);
  // get movies from firebase OR local storage
  const { movies, setMovies } = useMovieStore();

  useEffect(() => {
    setLoading(true);
    if (user) setMovies(user.uid);
  }, [user]);

  useEffect(() => {
    if (movies) setLoading(false);
  }, [movies]);

  return (
    <>
      {loading && (
        <div className="flex flex-col h-full items-center justify-center gap-4">
          <LoadingIcons.Oval strokeWidth={4} height={"4em"} width={"4em"} />
          <div>Loading movies...</div>
        </div>
      )}
      {!loading && !movies && <p>No movies.</p>}
      {!loading && movies && <MovieGrid movies={movies} />}
    </>
  );
};

export default MoviesList;
