import useModalStore from "@/store/modal-store";
import { useEffect, useRef } from "react";
import imdbLogo from "@/assets/imdb-logo.png";
import { MdClose } from "react-icons/md";

const MovieModal = () => {
  const { isOpen, content, closeMovieModal } = useModalStore();

  useEffect(() => {
    if (isOpen) {
      console.log("< content >\n", content, isOpen);
    }
  }, [isOpen, content]);

  if (!isOpen) return null;

  return (
    <dialog
      open={isOpen}
      onClose={closeMovieModal}
      className="movie-modal backdrop-blur flex items-center justify-center fixed z-50 w-full h-full bg-dark/90 top-0 left-0">
      <div className="relative z-50 modal bg-dark-900 overflow-hidden rounded-lg drop-shadow-2xl w-11/12 lg:w-8/12 2xl:w-6/12 text-slate-100">
        <button className="absolute z-10 right-4 top-4 button button-icon" onClick={closeMovieModal}>
          <MdClose />
        </button>
        <div className="flex items-center">
          <div className="bg-dark">
            <img className="h-full w-full" src={`${content.Poster}`} alt="" />
          </div>
          <div className="w-2/3 p-8">
            <h4>
              <a href={`https://imdb.com/title/${content.imdbID}`} className="text-light hover:text-light-600">
                {content.Title}
              </a>
            </h4>

            <div className="imdb-badge">
              <img src={imdbLogo} alt="" />
              <span className="ml-1">{content.imdbRating}</span>
            </div>

            <div className="mb-6">
              <span className="badge">{content.Genre}</span>
              <span className="badge">{content.Rated}</span>
              <span className="badge">{content.Runtime}</span>
              <span className="badge">{content.Year}</span>
            </div>

            <p>
              <span className="font-medium">Directed by: </span>
              {content.Director}
            </p>

            <p className="">{content.Plot}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MovieModal;
