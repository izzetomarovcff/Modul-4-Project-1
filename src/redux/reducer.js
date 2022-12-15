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
      default:
        return state;
    }
  };
  
  export default reducer;