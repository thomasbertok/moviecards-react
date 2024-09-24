import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies, showDetails }) => {
  return (
    <>
      {movies.length === 0 && <p>no movies in the database.</p>}

      {movies.length > 0 && (
        <div className="flex justify-between items-center mb-8">
          <div>{movies.length} movies in the list</div>
        </div>
      )}

      {movies !== null && movies.length !== 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
          {movies.map((item, index) => (
            <MovieCard movie={item} key={index} showDetails={showDetails} />
          ))}
        </div>
      )}
    </>
  );
};

export default MoviesList;
