import axios from "axios";
import { getCachedPosts, setCachedPosts } from "../apiHelper";
import { postConfig } from "./apiConfigs";

export const fetchPostData = async (pageNumber: number) => {
  let cachedData = getCachedPosts(pageNumber);

  if (cachedData) {
    return cachedData;
  } else {
    const res = await axios(postConfig(pageNumber));

    cachedData = res.data;
    setCachedPosts(pageNumber, cachedData);
    return cachedData;
  }
};
