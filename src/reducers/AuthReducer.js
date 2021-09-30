import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, RESET_ERROR } from './constants/User';

const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
const initialState = {
  currentUser: currentUser,
  loading: false,
  error: null,
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.data,
        loading: false
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case REGISTER_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.data,
        loading: false
      }
    }
    case REGISTER_FAIL: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }

    case LOGOUT: {
      localStorage.removeItem("user");
      return {
        ...state,
        currentUser: null,
        errorLogin: null,
        errorRegister: null,
        loading: null,
      };
    }

    case RESET_ERROR: {
      return { ...state, error: null }
    }

    default:
      return state;
  }
}
export default authReducer;