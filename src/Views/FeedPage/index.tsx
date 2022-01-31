import Navbar from "../../common/Navbar";
import TimelineView from "../../common/TimelineView";
import "./index.css";
import useFetchPosts from "./utils/useFetchPosts";

function FeedPage() {
  return (
    <div>
      <Navbar />
      <div className="fpc219FeedPageContainer">
        <TimelineView fetchHandler={useFetchPosts} />
      </div>
    </div>
  );
}

export default FeedPage;
