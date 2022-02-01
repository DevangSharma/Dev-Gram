import React, { useEffect } from "react";
import NetworkImage from "../../../common/NetworkImages";
import ClipLoader from "react-spinners/ClipLoader";

import "./index.css";
function GridView({ postsData }: any) {
  const { isLoading, postList, lastPostReached } = postsData;

  return (
    <div className="gvc219GridViewContainer">
      {postList.map((item: any, index: number) => {
        if (index === postList.length - 5) {
          return (
            <div ref={lastPostReached} key={item.id}>
              <NetworkImage key={item.id} url={item.urls.regular} />
            </div>
          );
        }

        return (
          <div key={item.id}>
            <NetworkImage key={item.id} url={item.urls.regular} />
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

export default GridView;
