import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import ImageNotFound from "@/assets/image-not-found.jpg";
import useModalStore from "@/store/modal-store";

const MovieCard = (props) => {
  const { Title, Poster, Year, Actors, Director, Genre, imdbID } = props.movie;
  let moviePoster = Poster;

  const { setMovieModal } = useModalStore();

  // default the poster image
  if (Poster === "N/A") moviePoster = { ImageNotFound };

  return (
    <div
      className="card flex flex-col gap-3 relative w-full h-full cursor-pointer"
      onClick={() => setMovieModal(props.movie)}>
      <div
        className="card-poster hover:scale-105 transition-all "
        style={{ backgroundImage: `url(${moviePoster})` }}></div>

      <div className="card-body text-sm flex flex-col gap-2">
        <h4 className="text-sm lg:text-md font-medium leading-none mb-0">{Title}</h4>
        <p className="text-slate-400">
          <span className="card-body-year">{Year}</span>
          <span className="card-body-genre">{Genre}</span>
        </p>

        <button className="absolute button button-icon bottom-3 right-0 bg-transparent">
          <HiDotsHorizontal size="24px" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
