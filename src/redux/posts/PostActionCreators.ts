import axios from "axios";
import { AnyAction } from "redux";
import { FETCH_POSTS, SET_POSTS } from "./PostActionTypes";
import { ThunkDispatch } from "redux-thunk";
import { BASE_URL, CLIENT_ID } from "../../constants/API";
import { getCachedPosts, setCachedPosts } from "../../utils/apiHelper";

export const fetchPosts = (pageNumber: number) => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: FETCH_POSTS,
    });

    let cachedData = getCachedPosts(pageNumber);

    if (cachedData) {
      dispatch(setPosts(cachedData));
    } else {
      axios({
        method: "GET",
        url: BASE_URL + "photos",
        params: {
          client_id: CLIENT_ID,
          per_page: 10,
          page: pageNumber,
        },
      }).then((res) => {
        cachedData = res.data;
        setCachedPosts(pageNumber, cachedData);
        dispatch(setPosts(cachedData));
      });
    }
  };
};

export const setPosts = (data: {}) => {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: SET_POSTS,
      payload: data,
    });
  };
};
