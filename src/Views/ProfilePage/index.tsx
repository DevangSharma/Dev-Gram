import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../../common/Navbar";
import TimelineView from "./TimelineView";
import * as actions from "../../redux/actionCreators";
import { stateType } from "../../redux";
import ProfilePageHeader from "./ProfilePageHeader";
import "./index.css";
import GridView from "./GridView";
import ToggleViews from "./ToggleView";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const dispatch = useDispatch();
  const { getUserData, getUserImages } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: stateType): any => state.userData);
  const [isGridView, setGridView] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    getUserData(username!);
    getUserImages(username!);
  }, []);

  if (state.isLoading) {
    return <h2>Data is loading</h2>;
  }
  return (
    <div>
      <Navbar />
      <div className="ppc219ProfilePageContainer">
        <ProfilePageHeader userData={state.userData} />
        <ToggleViews isGridView={isGridView} setGridView={setGridView} />

        {state.isImageLoading ? (
          <h2>Data is loading</h2>
        ) : (
          <div>
            {isGridView ? (
              <GridView imageList={state.userImages} />
            ) : (
              <TimelineView imageList={state.userImages} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
