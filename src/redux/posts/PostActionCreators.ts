import axios from "axios";
import { AnyAction } from "redux";
import { FETCH_POSTS, SET_POSTS } from "./PostActionTypes"
import {ThunkDispatch} from 'redux-thunk';
import { BASE_URL, CLIENT_ID } from "../../constants/API";


export const fetchPosts = () => {
    return async (dispatch:ThunkDispatch<{}, void, AnyAction>) => {
        dispatch({
            type: FETCH_POSTS
        });

        axios.get(BASE_URL + "/photos" + CLIENT_ID).then(
            (res) => {
                console.log(res.data);
                dispatch(setPosts(res.data));
            }
        )
    }
}

export const setPosts = (data: {}) => {
    return (dispatch:ThunkDispatch<{}, void, AnyAction>) => {
        dispatch({
            type: SET_POSTS,
            payload: data
        });
    }
}