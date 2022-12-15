const initState = {
  movies: [],
  listMovies: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return {
        ...state,
        movies: [...action.payload.movies],
      };
    case "ADD_TO_MOVIE":
      const newMovie = state.movies.find(
        (item) => item.imdbID === action.payload.id
      );
      const listMovies = [...state.listMovies, { ...newMovie }];
      return { ...state, listMovies };
    default:
      return state;
  }
};

export default reducer;