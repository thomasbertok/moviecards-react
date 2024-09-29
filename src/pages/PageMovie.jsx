import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOMDBById } from "@/services/fetchOMDB";
import MovieDetails from "@/components/MovieDetails";
import { BsChevronLeft } from "react-icons/bs";

const PageMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const fetchMovieById = async (id) => {
    const movie = await fetchOMDBById(id);
    if (!movie || movie.Response) {
      setError(movie.Error || "Movie not found.");
      throw new Error(movie.Error || "Movie not found.");
    }
    setMovie(movie);
  };

  useEffect(() => {
    const storedMovies = localStorage.getItem(`moviecards-movies-database`);
    if (storedMovies) {
      const storedMovie = JSON.parse(storedMovies).find((movie) => movie.imdbID === id);
      if (storedMovie) {
        setMovie(storedMovie);
      } else {
        setError("Movie not found in local storage.");
      }
    } else {
      try {
        fetchMovieById(id);
      } catch (error) {
        console.error("!!! Error: ", error);
      }
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-full p-10 gap-10">
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
