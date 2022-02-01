import { CACHED_FEED_POSTS } from "../constants/localStorage";

export const getCachedPosts = (pageNumber: number) => {
  if (pageNumber > 2) return null;

  const data = localStorage.getItem(CACHED_FEED_POSTS + pageNumber.toString());

  if (data === null) return null;

  return JSON.parse(data);
};

export const setCachedPosts = (pageNumber: number, value: {}) => {
  if (pageNumber > 2) return;

  localStorage.setItem(
    CACHED_FEED_POSTS + pageNumber.toString(),
    JSON.stringify(value)
  );
};

export const clearCachedPosts = () => {
  localStorage.removeItem(CACHED_FEED_POSTS + "1");
  localStorage.removeItem(CACHED_FEED_POSTS + "2");
};
