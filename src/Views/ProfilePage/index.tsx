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

function ProfilePage() {
  const dispatch = useDispatch();
  const { getUserData, clearUser } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: stateType): any => state.userData);
  const [isGridView, setGridView] = useState(true);

  const { username } = useParams();

  const postsData = useFetchUserImages();

  useEffect(() => {
    getUserData(username!);
  }, []);

  useEffect(() => {
    console.log("user cleared");

    clearUser();
  }, [username]);

  if (state.isLoading) {
    return <h2>Data is loading</h2>;
  }
  return (
    <div>
      <Navbar />
      {state.isLoading ? (
        <h2>Data is loading</h2>
      ) : (
        <div className="ppc219ProfilePageContainer">
          <ProfilePageHeader userData={state.userData} />
          <ToggleViews isGridView={isGridView} setGridView={setGridView} />

          <div>
            {isGridView ? (
              <GridView postsData={postsData} />
            ) : (
              <TimelineView postsData={postsData} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
