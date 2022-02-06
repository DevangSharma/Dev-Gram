import "./TimelineView.css";
import PostView from "./PostView";
import ClipLoader from "react-spinners/ClipLoader";

function TimelineView({ postsData }: any) {
  const { isLoading, postList, lastPostReached } = postsData;

  return (
    <div className="tlc219TimelineContainer">
      {postList.map((item: any, index: number) => {
        if (index === postList.length - 5) {
          return (
            <div ref={lastPostReached} key={item.id}>
              <PostView key={item.id} postData={item} />
            </div>
          );
        }

        return (
          <div key={item.id}>
            <PostView postData={item} />
          </div>
        );
      })}

      {isLoading && (
        <ClipLoader
          color={document.documentElement.style.getPropertyValue(
            "--primaryMainColor"
          )}
        />
      )}
    </div>
  );
}

export default TimelineView;
