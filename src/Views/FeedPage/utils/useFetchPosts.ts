import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { stateType } from "../../../store/reducer";
import { getPosts } from "../../../store/actionCreators";

function useFetchPosts() {
  const state = useSelector((state: stateType) => state.posts);

  const [pageNumber, setPageNumber] = useState(1);

  const lastPostReached = useCallback(
    (node) => {
      if (state.isLoading) return;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((previousNumber) => previousNumber + 1);
          observer.unobserve(entries[0].target);
        }
      });

      if (node) {
        observer.observe(node);
      }
    },

    [state.postList]
  );

  return {
    pageNumber: pageNumber,
    fetchPosts: getPosts,
    isLoading: state.isLoading,
    postList: state.postList,
    lastPostReached: lastPostReached,
  };
}

export default useFetchPosts;
