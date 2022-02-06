import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { userConfig, userImagesConfig } from "../../utils/api/apiConfigs";
import {
  CLEAR_USER,
  FETCH_USER,
  FETCH_USER_IMAGES,
  SET_USER,
  SET_USER_IMAGES,
} from "./actionTypes";

export const getUserData = (username: string) => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: FETCH_USER,
    });

    console.log(userConfig(username));

    axios(userConfig(username))
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export const setUser = (userData: any) => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: SET_USER,
      payload: userData,
    });
  };
};

export const setUserImages = (userImages: any) => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: SET_USER_IMAGES,
      payload: userImages,
    });
  };
};

export const getUserImages = (username: string, pageNumber: number) => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: FETCH_USER_IMAGES,
    });

    axios(userImagesConfig(username, pageNumber))
      .then((res) => {
        dispatch(setUserImages(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export const clearUser = () => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: CLEAR_USER,
    });
  };
};
