import MovieCard from "@/components/MovieCard";

/**
 * MovieGrid
 * Stateless component to render the list of movies
 */

const MovieGrid = ({ movies }) => {
  return (
    <>
      {/* {movies === null && <p>No movies.</p>} */}
      {movies !== null && movies.length === 0 && <p>Empty list of movies.</p>}
      {movies !== null && movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
          {movies.map((item, index) => (
            <MovieCard movie={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieGrid;
