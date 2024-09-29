import { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/auth/AuthContext";
import MovieGrid from "@/components/MovieGrid";
import useMovieStore from "@/store/movie-store";
import PageLoader from "@/components/PageLoader";

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
      {loading && <PageLoader text="Loading movies..." />}
      {!loading && !movies && <p>No movies.</p>}
      {!loading && movies && <MovieGrid movies={movies} />}
    </>
  );
};

export default MoviesList;
