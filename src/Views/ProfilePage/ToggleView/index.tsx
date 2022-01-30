import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./index.css";

function ToggleViews({ isGridView, setGridView }: any) {
  const switchToGrid = () => {
    setGridView(true);
  };
  const switchToList = () => {
    setGridView(false);
  };
  return (
    <div className="tvc219ToggleViewContainer">
      <button
        className={
          "tvb219ToggleViewButton" + (isGridView ? " selected" : " unselected")
        }
        onClick={switchToGrid}
      >
        <FontAwesomeIcon icon={faBorderAll} />
        <p>Grid</p>
      </button>
      <button
        className={
          "tvb219ToggleViewButton" + (!isGridView ? " selected" : " unselected")
        }
        onClick={switchToList}
      >
        <FontAwesomeIcon icon={faBars} />
        <p>List</p>
      </button>
    </div>
  );
}

export default ToggleViews;
