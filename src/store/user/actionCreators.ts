import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { userConfig, userImagesConfig } from "../../utils/api/apiConfigs";
import { fetchUserData } from "../../utils/api/fetchUserData";
import { fetchUserImages } from "../../utils/api/fetchUserImages";
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

    const userData = await fetchUserData(username);

    dispatch(setUser(userData));
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

    const userImagesData = await fetchUserImages(username, pageNumber);

    dispatch(setUserImages(userImagesData));
  };
};

export const clearUser = () => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: CLEAR_USER,
    });
  };
};
