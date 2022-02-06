import { combineReducers } from "redux";
import { postReducer } from "./posts/reducer";
import { userReducer } from "./user/reducer";

export const reducer = combineReducers({
  posts: postReducer,
  userData: userReducer,
});

export type stateType = ReturnType<typeof reducer>;
