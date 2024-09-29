import { useEffect, useRef } from "react";
import useModalStore from "@/store/modal-store";
import imdbLogo from "@/assets/imdb-logo.png";
import { MdClose } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

const MovieModal = () => {
  /**
   * get/set the state from the store
   */
  const { isOpen, content, closeMovieModal } = useModalStore();

  /**
   * reference to the dialog element
   */
  const dialogRef = useRef();

  /**
   * navigate
   */
  const navigate = useNavigate();

  useEffect(() => {
    //console.log("modal content", content);

    /**
     * catch Esc key and close the modal
     * @param {*} event
     */
    const handleKeyDown = (event) => {
      console.log("key", event.key);
      if (event.key === "Escape") {
        closeMovieModal();
      }
    };

    /**
     * catch click event on the dialog and close the modal
     * @param {*} event
     */
    const clickOutsideToClose = (event) => {
      if (event.target === dialogRef.current) {
        closeMovieModal();
      }
    };

    /**
     * add event listeners
     */
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", clickOutsideToClose);
    }

    return () => {
      /**
       * remove event listeners
       */
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", clickOutsideToClose);
    };
  }, [isOpen, content]);

  /**
   * return null if modal is not open in the modal-store
   */
  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      open={isOpen}
      onClose={closeMovieModal}
      className={`movie-dialog backdrop-blur flex items-center justify-center fixed z-50 w-full h-full bg-blue-800/90 top-0 left-0 p-0`}>
      <div className="movie-dialog-window flex relative z-100 bg-blue-900 text-sand-200 overflow-hidden drop-shadow-2xl">
        <button className="absolute z-10 right-8 top-8 button button-icon" onClick={closeMovieModal}>
          <MdClose />
        </button>
        <div className="movie-dialog-content">
          <div className="movie-dialog-poster">
            <img className="modal-poster h-full w-full" src={`${content.Poster}`} alt="" />
          </div>
          <div className="movie-dialog-details">
            <h4 className="mb-0">
              <Link to={`/movies/${content.imdbID}`} className="text-sand-200 hover:text-sand-600" title="View on IMDB">
                {content.Title}
              </Link>
            </h4>

            <div className="flex gap-1">
              <span className="badge bg-sand-600">{content.Genre}</span>
              <span className="badge bg-sand-600">{content.Rated}</span>
              <span className="badge bg-sand-600">{content.Runtime}</span>
              <span className="badge bg-sand-600">{content.Year}</span>

              <a href={`https://imdb.com/title/${content.imdbID}`} className="imdb-badge ml-auto" title="View on IMDB">
                <img src={imdbLogo} alt="" />
                <span className="ml-1 text-blue-900">{content.imdbRating}</span>
              </a>
            </div>

            <div className="">
              <p className="mb-1">
                <span className="font-medium">Directed by: </span>
                {content.Director}
              </p>

              <p className="mb-0">
                <span className="font-medium">Starring: </span>
                {content.Actors}
              </p>
            </div>

            <p className="truncated-text text-sand-600">{content.Plot}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MovieModal;
