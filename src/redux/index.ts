import { Reducer } from "react";
import { combineReducers } from "redux";
import { postReducer } from "./posts/PostReducer";
import { userReducer } from "./user/userReducer";

export const reducer = combineReducers({
  posts: postReducer,
  userData: userReducer,
});

export type stateType = ReturnType<typeof reducer>;
