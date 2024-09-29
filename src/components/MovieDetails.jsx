import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Movie Poster */}
        <img src={movie.Poster} alt={`${movie.Title} Poster`} className="w-64 shadow-md" />

        {/* Movie Details */}
        <div className="space-y-8">
          {/* Title and Year */}
          <div>
            <h1 className="text-3xl font-bold text-sand-300">{movie.Title}</h1>
            <p className="text-sand">
              {movie.Year} &middot; Rated {movie.Rated}
            </p>
          </div>

          {/* Genre and Runtime */}
          <div>
            <p className="text-sm ">
              <span className="font-semibold text-sand-700">Genre:</span> {movie.Genre}
            </p>
            <p className="text-sm ">
              <span className="font-semibold text-sand-700">Runtime:</span> {movie.Runtime}
            </p>
          </div>

          {/* Director, Writers, and Actors */}
          <div className="text-sm  space-y-1">
            <p>
              <span className="font-semibold text-sand-700">Director:</span> {movie.Director}
            </p>
            <p>
              <span className="font-semibold text-sand-700">Writers:</span> {movie.Writer}
            </p>
            <p>
              <span className="font-semibold text-sand-700">Actors:</span> {movie.Actors}
            </p>
          </div>
        </div>
      </div>

      {/* Plot */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-sand-600">Plot</h2>
        <p className="mt-2 text-sand-300">{movie.Plot}</p>
      </div>

      {/* Ratings */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {movie.Ratings.map((rating, index) => (
          <div key={index}>
            <p className="text-sm text-sand-300">
              <span className="font-semibold text-sand-700">{rating.Source}:</span> {rating.Value}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 space-y-2 text-sm text-sand-300">
        <p>
          <span className="font-semibold text-sand-700">Language:</span> {movie.Language}
        </p>
        <p>
          <span className="font-semibold text-sand-700">Country:</span> {movie.Country}
        </p>
        <p>
          <span className="font-semibold text-sand-700">Box Office:</span> {movie.BoxOffice}
        </p>
        <p>
          <span className="font-semibold text-sand-700">Awards:</span> {movie.Awards}
        </p>
      </div>
    </>
  );
};

export default MovieDetails;
