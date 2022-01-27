import axios from "axios";
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { BASE_URL, CLIENT_ID } from "../../constants/API";
import { FETCH_POSTS } from "../posts/PostActionTypes";
import { FETCH_USER, SET_USER } from "./userActionTypes";


export const getUserData = (username : string) => {
    return async (dispatch: ThunkDispatch<{},void,AnyAction>) => {
        dispatch({
            type: SET_USER,
        });

        axios.get(BASE_URL + 'users/' + username + CLIENT_ID).then(
            ((res) => {
                dispatch(setUser(res));
            })
        )
    }
}

export const setUser = (userData: any) => {
    return async (dispatch: ThunkDispatch<{},void,AnyAction>) => {
        dispatch({
            type: FETCH_USER,
            payload: userData,
        });
    }
}