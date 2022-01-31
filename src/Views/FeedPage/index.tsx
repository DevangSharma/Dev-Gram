import Navbar from "../../common/Navbar";
import TimelineView from "./TimelineView";
import "./index.css";

function FeedPage() {
  return (
    <div>
      <Navbar />

      <div className="fpc219FeedPageContainer">
        <TimelineView />
      </div>
    </div>
  );
}

export default FeedPage;
