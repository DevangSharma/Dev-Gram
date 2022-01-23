import { Dispatch } from "redux";
import { FETCH_POSTS } from "./PostActionTypes"

export const fetchPosts = () => {
    return (dispatch:Dispatch) => {
        dispatch({
            type: FETCH_POSTS
        });
    }
}