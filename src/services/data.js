export const fetchMovies = async (userId) => {
  const query = ref(database, userId);
  onValue(query, (snapshot) => {
    // if there is a result
    if (snapshot.exists()) {
      // the result has a value, is not null
      const result = snapshot.val();
      // console.log('>>> movies obj: ', result.movies)
      // convert the object to array
      const moviesArray = Object.values(result.movies);
      // set state of movies
      return moviesArray;
      //console.log('>>> MOVIES: ', movies)
    } else {
      // no result
      console.error("!!! No snapshot found.");
      return null;
    }
  });
};
