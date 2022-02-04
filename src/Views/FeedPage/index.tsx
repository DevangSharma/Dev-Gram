import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../common/Navbar";
import TimelineView from "../../common/TimelineView";
import "./FeedPage.css";
import Stories from "./Stories";
import useFetchPosts from "./utils/useFetchPosts";

function FeedPage() {
  const dispatch = useDispatch();
  const postsData = useFetchPosts();

  useEffect(() => {
    dispatch(postsData.fetchPosts(postsData.pageNumber));
  }, [postsData.pageNumber]);

  return (
    <div className="fpc219FeedPageContainer">
      <Navbar />
      <Stories postData={postsData} />
      <div>
        <TimelineView postsData={postsData} />
      </div>
    </div>
  );
}

export default FeedPage;
