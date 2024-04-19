import constants from '../constants/actionTypes'

let initialState = {
      movies: [],
      selectedMovie: null
}

const movieReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_MOVIES:
                  updated['movies'] = action.movies;
                  updated['selectedMovie'] = action.movies[0];
                  return updated;
            case constants.SET_MOVIE:
                  updated['selectedMovie'] = action.selectedMovie;
                  return updated;
            case constants.FETCH_MOVIE:
                  updated['selectedMovie'] = action.selectedMovie;
                  return updated;
            case constants.ADD_MOVIE_REVIEW:
                  const { movieId, review } = action.payload;
                  // Find the movie in state by its id
                  const movieIndex = state.movies.findIndex(movie => movie.id === movieId);
                  if (movieIndex !== -1) {
                  // Clone the state to avoid mutation
                  const newState = { ...state };
                  // Clone the movie object to avoid mutation
                  const updatedMovie = { ...newState.movies[movieIndex] };
                  // Add the new review to the movie's reviews array
                  updatedMovie.movieReviews.push(review);
                  // Update the movie in the movies array
                  newState.movies[movieIndex] = updatedMovie;
                  // Return the updated state
                  return newState;
                  }
                  return state;
            default:
                  return state;
      }
}

export default movieReducer;