import React, { useEffect, useState } from "react";
import NetworkImage from "../../../common/NetworkImages";
import ClipLoader from "react-spinners/ClipLoader";

import "./index.css";
import NetworkModal from "../../../common/NetworkModal";
function GridView({ postsData }: any) {
  const { isLoading, postList, lastPostReached } = postsData;

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="gvc219GridViewContainer">
      {postList.map((item: any, index: number) => {
        if (index === postList.length - 5) {
          return (
            <div ref={lastPostReached} key={item.id}>
              <div
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <NetworkImage key={item.id} url={item.urls.regular} />
              </div>

              <NetworkModal
                isOpen={isModalOpen}
                toggleModal={setModalOpen}
                url={item.urls.regular}
              />
            </div>
          );
        }

        return (
          <div key={item.id}>
            <div
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <NetworkImage key={item.id} url={item.urls.regular} />
            </div>

            <NetworkModal
              isOpen={isModalOpen}
              toggleModal={setModalOpen}
              url={item.urls.regular}
            />
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
