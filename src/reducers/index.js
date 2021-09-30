import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import movieReducer from "./MovieReducer";
import userReducer from "./UserReducer";
import theaterReducer from "./TheaterReducer";
const rootReducer = combineReducers({
  authReducer, movieReducer, userReducer, theaterReducer,
});
export default rootReducer;