import { useEffect } from "react";
import Navbar from "../../common/Navbar";
import TimelineView from "../../common/TimelineView";
import "./index.css";
import useFetchPosts from "./utils/useFetchPosts";

function FeedPage() {
  const postsData = useFetchPosts();

  useEffect(() => {
    postsData.fetchPosts(postsData.pageNumber);
  }, [postsData.pageNumber]);

  return (
    <div>
      <Navbar />
      <div className="fpc219FeedPageContainer">
        <TimelineView postsData={postsData} />
      </div>
    </div>
  );
}

export default FeedPage;
