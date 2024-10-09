import React, { useState } from "react";
import { MdNotificationImportant, MdOutlineSearch } from "react-icons/md";
import { fetchOMDB } from "@/services/omdb";
import { omdb } from "@/services/omdb";
import useMovieStore from "@/store/movie-store";
import MovieSearchResults from "@/components/MovieSearchResults";

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const [resultsBlockVisible, setResultsBlockVisible] = useState(false);
  const [message, setMessage] = useState("");

  // when focusing the input
  const handleFocus = (ev) => {
    ev.target.select();
    setMessage("");
  };

  // while changing input content
  // I search for the movie title in the localStorage
  const handleSearchOnChange = (ev) => {
    setSearchQuery(ev.target.value);
  };

  // check for hitting Enter or ESC
  const handleSearchKeyUp = (ev) => {
    // when i press enter, the fetch is triggered
    // not to bother omdb too much...
    if (ev.key === "Enter" && ev.target.value.length >= 2) {
      // place the search
      fetchSearchedOMDBMovies(ev.target.value);
    }
    // close the search process
    if (ev.key === "Escape") {
      // null the search string
      setSearchQuery("");
      setResultsBlockVisible(false);
    }
  };

  /**
   * clicking on a movie in the search results list
   * @param {*} imdbID 
   */
  const handleSelectMovie = (imdbID) => {
    console.log("handleSelectMovie: ", imdbID);
  };

  /**
   * get the movies from OMDB
   * https://www.omdbapi.com
   * @param {*} query 
   */
  const fetchSearchedOMDBMovies = async (query) => {
    setSearching(true);
    setMessage("");
    setSearchResult([]);

    console.log("fetchSearchedOMDBMovies: ", query);

    const result = await fetchOMDB(query);

    if (result.Response === "True") {
      setSearchResult(result.Search);
      setTotalResults(result.totalResults);
      //console.log("Result:", result);
    } else {
      setSearchQuery("");
      setMessage(result.Error || "No results.");
    }

    setSearching(false);
  };

  return (
    <div className="search-input flex items-center justify-center max-w-96">
      <div className="relative flex items-center justify-between rounded-[20px] bg-blue-600 w-full">
        <input
          type="search"
          className="block text-sand-100 bg-transparent border-none ml-6 w-full focus:bg-blue-300 focus:outline-none"
          placeholder="Search Movies..."
          name="search-input"
          id="search-input"
          value={searchQuery}
          onFocus={handleFocus}
          onChange={handleSearchOnChange}
          onKeyUp={handleSearchKeyUp}
          disabled={searching ? "disabled" : ""}
          tabIndex={1}
        />
        <button className="button-icon button-primary w-[40px] h-[40px]">
          <MdOutlineSearch size={22} />
        </button>
      </div>

      {searchResult && searchResult.length > 0 && (
        <div className="search-results fixed z-50 w-full h-full left-0 top-[80px] bg-blue-900/90 backdrop-blur-md">
          <MovieSearchResults
            list={searchResult}
            query={searchQuery}
            totalResults={totalResults}
            select={handleSelectMovie}
          />
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
