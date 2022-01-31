import React, { useEffect } from "react";
import NetworkImage from "../../../common/NetworkImages";
import "./index.css";
function GridView({ fetchHandler }: any) {
  const { pageNumber, fetchPosts, isLoading, postList, lastPostReached } =
    fetchHandler();

  useEffect(() => {
    fetchPosts(pageNumber);
  }, [pageNumber]);

  return (
    <div className="gvc219GridViewContainer">
      <div>{isLoading && <h2>Data is Loading</h2>}</div>
      {postList.map((item: any, index: number) => {
        if (index === postList.length - 5) {
          return (
            <div ref={lastPostReached} key={item.id}>
              <NetworkImage key={item.id} url={item.urls.regular} />;
            </div>
          );
        }

        return (
          <div key={item.id}>
            <NetworkImage key={item.id} url={item.urls.regular} />;
          </div>
        );
      })}
    </div>
  );
}

export default GridView;
