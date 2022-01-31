import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../../common/Navbar";
import * as actions from "../../redux/actionCreators";
import { stateType } from "../../redux";
import ProfilePageHeader from "./ProfilePageHeader";
import "./index.css";
import GridView from "./GridView";
import ToggleViews from "./ToggleView";
import { useParams } from "react-router-dom";
import TimelineView from "../../common/TimelineView";
import useFetchUserImages from "./utills/useFetchUserImages";
import { clearUser } from "../../redux/actionCreators";

function ProfilePage() {
  const dispatch = useDispatch();
  const { getUserData } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: stateType): any => state.userData);
  const [isGridView, setGridView] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    getUserData(username!);
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

        <div>
          {isGridView ? (
            <GridView fetchHandler={useFetchUserImages} />
          ) : (
            <TimelineView fetchHandler={useFetchUserImages} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
