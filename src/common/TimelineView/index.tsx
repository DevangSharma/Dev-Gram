import React, { useEffect } from "react";
import "./index.css";
import PostView from "./PostView";

function TimelineView({ postsData }: any) {
  const { isLoading, postList, lastPostReached } = postsData;

  return (
    <div className="tlc219TimelineContainer">
      {isLoading && <h2>Data is Loading</h2>}
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
