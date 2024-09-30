// OMDB keys
export const omdb = {
  api_url: import.meta.env.VITE_OMDB_API_URL,
  api_key: import.meta.env.VITE_OMDB_API_KEY,
};

export const fetchOMDB = async (queryString) => {
  console.log(">>> fetchOMDB: ", queryString);
  const query = `${omdb.api_url}?&apikey=${omdb.api_key}&plot=short&type=movie&s=${queryString}`;
  try {
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error("Response error", response.status);
    }
    //console.log("response: ", response);
    const movies = await response.json();
    console.log("movies: ", movies);
    return movies;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * get one movie from OMDB by id
 * https://www.omdbapi.com
 * @param {string} id
 * @returns {Promise}
 * @throws {Error} if not found, or omdb response error
 */
export const fetchOMDBById = async (id) => {
  console.log(">>> fetchOMDBById: ", id);

  const query = `${omdb.api_url}?&apikey=${omdb.api_key}&i=${id}&plot=full`;
  try {
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error("OMDB response error", response.status);
    }

    const movie = await response.json();
    // OMDB gives a 200 response when the movie is not found,
    // so we have to check the response. {Response, Error}
    if (movie.Response === "False") {
      console.log("response false: ", movie.Error);
      throw new Error(movie.Error);
    }

    return movie;
  } catch (error) {
    throw new Error(error.message);
  }
};
