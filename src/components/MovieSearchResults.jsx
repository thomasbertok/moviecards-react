import { useState } from "react";
import ImageNotFound from "@/assets/image-not-found.jpg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const MovieSearchResults = ({ list, query, totalResults, select }) => {
  const [results, setResults] = useState(list);
  const [currentPage, setCurrentPage] = useState(0);

  const getPreviousPage = () => {
    if (results.length > 0) {
      setResults(results.slice(0, -1));
    }
  };

  const getNextPage = () => {
    if (results.length < totalResults) {
      setResults(results.concat(list.slice(results.length, results.length + 10)));
    }
  };

  return (
    <div className="p-10 overflow-y-auto">
      <h5>
        Search results for: <strong>{query}</strong>
      </h5>

      <div className="search-results-wrapper flex flex-row justify-between items-center gap-2">
        <div className="lefter w-10">
          {currentPage > 0 && (
            <button className="button button-icon w-10 h-10 p-0" onClick={() => getPreviousPage()}>
              <MdArrowBackIos size="24px" />
            </button>
          )}
        </div>
        <div className="flex-1">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-10">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="search-result-card overflow-hidden drop-shadow-lg cursor-pointer"
                style={{
                  backgroundImage: item.Poster !== "N/A" ? `url(${item.Poster})` : `url(${ImageNotFound})`,
                }}
                title="Click to add this movie to the database"
                onClick={() => {
                  select(item.imdbID);
                }}>
                <div className="info lg:hidden">
                  <strong>{item.Title}</strong>
                  <br />
                  <small>{item.Year}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="righter w-10">
          {results.length < totalResults && (
            <button className="button button-icon w-10 h-10" onClick={() => getNextPage()}>
              <MdArrowForwardIos size="24px" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 mb-0 text-center text-sm text-sand hover:text-sand-300">
        <span className=" text-sand-700">
          Total nr. of OMDB results: <strong>{totalResults}</strong>
        </span>
      </div>
    </div>
  );
};

export default MovieSearchResults;
