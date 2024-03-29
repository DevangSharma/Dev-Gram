import ClipLoader from "react-spinners/ClipLoader";

import "./GridView.css";
import GridPostView from "./GridPostView.tsx";
function GridView({ postsData }: any) {
  const { isLoading, postList, lastPostReached } = postsData;

  return (
    <div className="gvc219GridViewContainer">
      {postList.map((item: any, index: number) => {
        if (index === postList.length - 5) {
          return (
            <div ref={lastPostReached} key={item.id}>
              <GridPostView item={item} />
            </div>
          );
        }

        return (
          <div key={item.id}>
            <GridPostView item={item} />
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
