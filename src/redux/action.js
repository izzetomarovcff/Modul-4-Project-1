export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    payload: {
      movies: movies,
    },
  };
}
export function addToMovie(id) {
  return {
    type: "ADD_TO_MOVIE",
    payload: {
      id: id,
    },
  };
}