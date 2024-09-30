import ImageNotFound from "@/assets/image-not-found.jpg";

const MovieSearchResults = ({ list, query, totalResults, select }) => {
  return (
    <div className="p-10 overflow-y-auto">
      <h5>
        Search results for: <strong>{query}</strong>
      </h5>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-10">
        {list.map((item, idx) => (
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

      <div className="mt-6 mb-0 text-center text-sm text-sand hover:text-sand-300">
        <span className=" text-sand-700">
          Total nr. of OMDB results: <strong>{totalResults}</strong>
        </span>
      </div>
    </div>
  );
};

export default MovieSearchResults;
