import React, { useEffect } from "react";
import NetworkImage from "../../../common/NetworkImages";
import "./index.css";
function GridView({ postsData }: any) {
  const { pageNumber, fetchPosts, isLoading, postList, lastPostReached } =
    postsData;
  useEffect(() => {
    fetchPosts(pageNumber);
  }, [pageNumber]);

  return (
    <div className="gvc219GridViewContainer">
      {isLoading && <h2>Data is Loading</h2>}
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
