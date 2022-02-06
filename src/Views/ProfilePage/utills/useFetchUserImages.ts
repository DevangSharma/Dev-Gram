import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserImages } from "../../../store/actionCreators";
import { stateType } from "../../../store/reducer";

function useFetchUserImages() {
  const state = useSelector((state: stateType) => state.userData);

  const [pageNumber, setPageNumber] = useState(1);

  const { username } = useParams();

  const lastPostReached = useCallback(
    (node) => {
      if (state.isLoadingImages) return;

      if (state.userImages.length === state.userData.total_photos)
        return "You are all caught up";

      const observer = new IntersectionObserver((entries, observe) => {
        if (entries[0].isIntersecting) {
          setPageNumber((previousNumber) => previousNumber + 1);
          observe.unobserve(entries[0].target);
        }
      });

      if (node) {
        observer.observe(node);
      }
    },

    [state.isLoadingImages]
  );

  return {
    pageNumber: pageNumber,
    fetchPosts: getUserImages.bind(null, username!),
    isLoading: state.isLoadingImages,
    postList: state.userImages,
    lastPostReached: lastPostReached,
  };
}

export default useFetchUserImages;
