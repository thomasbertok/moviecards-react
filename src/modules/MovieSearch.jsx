import React, { useState } from "react";
import { MdNotificationImportant } from "react-icons/md";

const MovieSearch = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [message, setMessage] = useState("");
  const [resultsBlockVisible, setResultsBlockVisible] = useState(false);

  // OMDB keys
  const omdb = {
    api_url: import.meta.env.VITE_OMDB_API_URL,
    api_key: import.meta.env.VITE_OMDB_API_KEY,
  };

  // when focusing the input
  const handleFocus = (ev) => {
    ev.target.select();
    setMessage("");
  };

  // changing input content
  const handleChangeSearchValue = (ev) => {
    setSearchQuery(ev.target.value);
  };

  // hit enter with some nice title text
  const handleSearch = (ev) => {
    //console.log(ev.target.value)

    // when i press enter, the fetch is triggered
    // not to bother omdb too much...
    if (ev.key === "Enter" && ev.target.value.length >= 2) {
      // place the search
      fetchOMDB(ev.target.value);
    }
    // close the search process
    if (ev.key === "Escape") {
      // null the search string
      setSearchQuery("");
      // setResultsBlockVisible(false)
    }
  };

  const fetchOMDB = async (queryString) => {
    setSearching(true);
    setMessage("");

    const query = `${omdb.api_url}?&apikey=${omdb.api_key}&plot=short&type=movie&s=${queryString}`;
    const response = await fetch(query);

    if (response.ok) {
      const movies = await response.json();

      if (movies.Response) {
        // there are movies in the result
        setSearchResult(movies.Search);
        props.setResult(movies.Search);
        setSearching(false);

        // show the results
        setResultsBlockVisible(true);
      } else {
        // no movies, result correct
        setSearching(false);
        setSearchQuery("");
        setSearchResult([]);
        setMessage("No results.");
      }
    } else {
      throw new Error("response error");
      console.error("OMDB says: Too bad! You gotta die!");
      setSearching(false);
    }
  };

  return (
    <div className="search-input flex items-center justify-center max-w-96">
      <div className="relative flex items-center justify-between rounded-[20px] bg-blue-600 w-full">
        <input
          type="search"
          className="block text-sand-100 bg-transparent border-none pl-6 w-full focus:bg-transparent focus:outline-none"
          placeholder="Search Movies..."
          name="search-input"
          id="search-input"
          value={searchQuery}
          onFocus={handleFocus}
          onChange={handleChangeSearchValue}
          onKeyUp={handleSearch}
          disabled={searching ? "disabled" : ""}
          tabIndex={1}
        />
        <button className="w-[80px] h-[40px] rounded-[20px] flex items-center justify-center">
          <svg
            className="w-5 h-5 text-sand-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>

      {/* <input
        className="search-input-input disabled:bg-dark rounded-[20px] max-w-[640px] w-full"
        type="text"
        name="search-input"
        id="search-input"
        value={searchQuery}
        onFocus={handleFocus}
        onChange={handleChangeSearchValue}
        onKeyUp={handleSearch}
        disabled={searching ? "disabled" : ""}
      /> */}
    </div>
  );
};

export default MovieSearch;
