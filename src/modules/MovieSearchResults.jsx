import React from "react";

const MovieSearchResults = (props) => {
  const searchResults = props.list;

  return (
    <>
      {searchResults.length > 0 && (
        <div className="fixed w-full overflow-y-auto bg-blue p-4 drop-shadow-md grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10">
          {searchResults.map((item, idx) => (
            <div
              key={idx}
              className="search-result-card rounded-lg overflow-hidden drop-shadow-lg bg-blue-600 cursor-pointer"
              style={{
                backgroundImage:
                  item.Poster !== "N/A"
                    ? `url(${item.Poster})`
                    : "url(https://placehold.it/198x264&text=Image+Not+Found)",
              }}
              title="Click to add this movie to the database"
              onClick={() => {
                props.select(item.imdbID);
              }}>
              <div className="info lg:hidden">
                <strong>{item.Title}</strong>
                <br />
                <small>{item.Year}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieSearchResults;
