// OMDB keys
const omdb = {
  api_url: import.meta.env.VITE_OMDB_API_URL,
  api_key: import.meta.env.VITE_OMDB_API_KEY,
};

export const fetchOMDB = async (queryString) => {
  const query = `${omdb.api_url}?&apikey=${omdb.api_key}&plot=short&type=movie&s=${queryString}`;
  const response = await fetch(query);
  if (!response.ok) {
    throw new Error("Response error", response.status);
  }
  const movies = await response.json();
  return movies;
};

export const fetchOMDBById = async (id) => {
  const query = `${omdb.api_url}?&apikey=${omdb.api_key}&i=${id}&plot=full`;
  const response = await fetch(query);
  if (!response.ok) {
    throw new Error("OMDB response error", response.status);
  }
  const movie = await response.json();
  return movie;
};
