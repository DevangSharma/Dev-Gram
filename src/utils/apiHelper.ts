import { CACHED_FEED_POSTS, PAGES_TO_CACHE } from "../constants/localStorage";

export const getCachedPosts = (pageNumber: number) => {
  if (pageNumber > PAGES_TO_CACHE) return null;

  const data = localStorage.getItem(CACHED_FEED_POSTS + pageNumber.toString());

  if (data === null) return null;

  return JSON.parse(data);
};

export const setCachedPosts = (pageNumber: number, value: {}) => {
  if (pageNumber > PAGES_TO_CACHE) return;

  localStorage.setItem(
    CACHED_FEED_POSTS + pageNumber.toString(),
    JSON.stringify(value)
  );
};

export const clearCachedPosts = () => {
  for (let pageNumber = 0; pageNumber < PAGES_TO_CACHE; pageNumber++) {
    localStorage.removeItem(CACHED_FEED_POSTS + pageNumber.toString);
  }
};
