import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOMDBById } from "@/services/omdb";
import MovieDetails from "@/components/MovieDetails";
import { BsChevronLeft } from "react-icons/bs";

const omdb = {
  api_url: import.meta.env.VITE_OMDB_API_URL,
  api_key: import.meta.env.VITE_OMDB_API_KEY,
};

const PageMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // check if movie is in local storage
    if (localStorage.getItem("moviecards-movies-database")) {
      const movies = JSON.parse(localStorage.getItem("moviecards-movies-database"));
      const foundMovie = movies.find((movie) => movie.imdbID === id);
      if (foundMovie) {
        setMovie(foundMovie);
        setLoading(false);
        return;
      }
    }

    // get movie from OMDB
    const getMovieFromOMDB = async () => {
      try {
        const response = await fetchOMDBById(id);
        // we handle the "movie not found" in fetchOMDBById
        // so it will raise an error if not found
        setMovie(response);
      } catch (error) {
        // TODO: it does not raise the React ErrorBoundary
        setError(error.message);
      }
      setLoading(false);
    };
    getMovieFromOMDB();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-full p-10 gap-10">
      {loading && <p>loading...</p>}
      {error && <p className="text-red-400 font-medium">{error}</p>}
      {movie && (
        <div className="max-w-6xl mx-auto bg-blue-900 text-sand-300 p-10 shadow-lg">
          <MovieDetails movie={movie} />
        </div>
      )}
      <Link to="/" className="button button-icon bg-blue-900 w-10 h-10">
        <BsChevronLeft />
      </Link>
    </div>
  );
};

export default PageMovie;
