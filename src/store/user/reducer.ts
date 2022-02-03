import { type } from "os";
import { Action } from "redux";
import {
  CLEAR_USER,
  FETCH_USER,
  FETCH_USER_IMAGES,
  SET_USER,
  SET_USER_IMAGES,
} from "./actionTypes";

type stateType = {
  isLoading: boolean;
  isLoadingImages: boolean;
  userData: {};
  userImages: {}[];
};
const initialState: stateType = {
  isLoading: true,
  isLoadingImages: true,
  userData: {},
  userImages: [],
};

type userActionType = {
  type: string;
  payload: any;
};

export const userReducer = (state = initialState, action: userActionType) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isLoading: true,
      };

    case SET_USER:
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
      };

    case FETCH_USER_IMAGES:
      return {
        ...state,
        isLoadingImages: true,
      };

    case SET_USER_IMAGES:
      return {
        ...state,
        isLoadingImages: false,
        userImages: [...state.userImages, ...action.payload],
      };

    case CLEAR_USER:
      return initialState;

    default:
      return state;
  }
};
