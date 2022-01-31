import axios from "axios";
import { AnyAction } from "redux";
import { FETCH_POSTS, SET_POSTS } from "./PostActionTypes"
import {ThunkDispatch} from 'redux-thunk';
import { BASE_URL, CLIENT_ID } from "../../constants/API";


export const fetchPosts = (pageNumber : number) => {
    return async (dispatch:ThunkDispatch<{}, void, AnyAction>) => {
        dispatch({
            type: FETCH_POSTS
        });

        axios({
            method:'GET',
            url: BASE_URL + 'photos',
            params: {
                client_id: CLIENT_ID,
                per_page:10,
                page: pageNumber
            }
        }
            ).then(
            (res) => {
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