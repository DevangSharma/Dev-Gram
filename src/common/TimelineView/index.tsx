import React, { useEffect } from "react";
import "./index.css";
import PostView from "./PostView";

function TimelineView({ fetchHandler }: any) {
  const { pageNumber, fetchPosts, isLoading, postList, lastPostReached } =
    fetchHandler();

  useEffect(() => {
    fetchPosts(pageNumber);
  }, [pageNumber]);

  return (
    <div className="tlc219TimelineContainer">
      <div>{isLoading && <h2>Data is Loading</h2>}</div>
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
    </div>
  );
}

export default TimelineView;
