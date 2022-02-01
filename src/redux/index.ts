import { Reducer } from "react";
import { combineReducers } from "redux";
import { postReducer } from "./posts/PostReducer";
import { themeReducer } from "./theme/themeReducer";
import { userReducer } from "./user/userReducer";

export const reducer = combineReducers(
    {
        posts: postReducer,
        userData: userReducer,
        theme: themeReducer
    }
)

export type stateType = ReturnType<typeof reducer>