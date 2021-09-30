import { GET_MOVIE_LIST_REQUEST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_LIST_FAIL, DELETE_MOVIE_REQUEST, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL, UPDATE_MOVIE_REQUEST, UPDATE_MOVIE_FAIL, UPDATE_MOVIE_SUCCESS, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAIL } from './constants/Movie';

const initialState = {
  movieList: [],
  loading: false,
  error: null,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_MOVIE_LIST_REQUEST: {
      return { ...state, loading: true, error: null, movieDetail: null, };
    }
    case GET_MOVIE_LIST_SUCCESS: {
      return {
        ...state,
        movieList: action.payload.data,
        loading: false
      };
    }
    case GET_MOVIE_LIST_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case DELETE_MOVIE_REQUEST: {
      return {
        ...state, loading: true, error: null,
      }
    }
    case DELETE_MOVIE_SUCCESS: {
      return {
        ...state, loading: false,
      }
    }
    case DELETE_MOVIE_FAIL: {
      return {
        ...state, loading: false, error: action.payload.error
      }
    }

    case UPDATE_MOVIE_REQUEST: {
      return {
        ...state, loading: true, error: null
      }
    }
    case UPDATE_MOVIE_SUCCESS: {
      return {
        ...state, loading: false
      }
    }
    case UPDATE_MOVIE_FAIL: {
      return {
        ...state, loading: false, error: action.payload.error
      }
    }

    case ADD_MOVIE_REQUEST: {
      return {
        ...state, loading: true, error: null,
      }
    }
    case ADD_MOVIE_SUCCESS: {
      return {
        ...state, loading: false
      }
    }
    case ADD_MOVIE_FAIL: {
      return {
        ...state, loading: false, error: action.payload.error
      }
    }

    default:
      return state;
  }
}
export default movieReducer;