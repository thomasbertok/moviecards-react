import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import ImageNotFound from "@/assets/image-not-found.jpg";
import useModalStore from "@/store/modal-store";
import { MdEdit, MdDelete } from "react-icons/md";

const MovieCard = (props) => {
  const { Title, Poster, Year, Genre, imdbID } = props.movie;
  const [showOptions, setShowOptions] = useState(false);
  const { setMovieModal } = useModalStore();

  const toggleDropdown = (movie) => {
    setShowOptions(!showOptions);
  };

  const handleDelete = (movie) => {
    console.log("handleDelete: ", movie);
    setShowOptions(false);
  };

  const handleEdit = (movie) => {
    console.log("handleEdit: ", movie);
    setShowOptions(false);
  };

  let moviePoster = Poster;
  // default the poster image
  if (Poster === "N/A") moviePoster = { ImageNotFound };

  return (
    <div className="card flex flex-col gap-3 relative w-full h-full cursor-pointer">
      <div
        className="card-poster"
        style={{ backgroundImage: `url(${moviePoster})` }}
        onClick={() => setMovieModal(props.movie)}></div>

      <div className="flex items-start justify-between">
        <div className="card-body text-sm flex flex-col gap-2">
          <h4 className="text-sm lg:text-md font-medium leading-none mb-0" onClick={() => setMovieModal(props.movie)}>
            {Title}
          </h4>
          <p className="text-blue-300 mb-0">
            <span className="card-body-year">{Year}</span>
          </p>
        </div>

        <div className="relative z-10">
          <button
            className="button button-icon bg-transparent hover:bg-blue-900 active:bg-blue-800 w-8 h-8"
            onClick={() => toggleDropdown(props.movie)}>
            <HiDotsHorizontal size="20px" />
          </button>
          {showOptions && (
            <div id="dropdown" class="absolute z-100 bg-blue-900 rounded-lg shadow-lg w-40 right-0 bottom-12">
              <ul class="py-2 text-sm text-sand-600" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a
                    href="#"
                    class="flex items-center gap-2 px-4 py-2 hover:bg-blue-800 hover:text-sand-100"
                    onClick={() => handleEdit(props.movie)}>
                    <MdEdit size="20px" />
                    <span>Edit</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center gap-2 px-4 py-2 hover:bg-blue-800 hover:text-sand-100"
                    onClick={() => handleDelete(props.movie)}>
                    <MdDelete size="20px" className="text-danger-400" />
                    <span className="text-danger-400">Delete</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
