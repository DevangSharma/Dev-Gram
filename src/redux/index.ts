import { Reducer } from "react";
import { combineReducers } from "redux";
import { postReducer } from "./posts/PostReducer";

export const reducer = combineReducers(
    {
        posts: postReducer
    }
)

export type stateType = ReturnType<typeof reducer>