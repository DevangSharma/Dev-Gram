import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../../common/Navbar";
import * as actions from "../../store/actionCreators";
import { stateType } from "../../store/reducer";
import ProfilePageHeader from "./ProfilePageHeader";
import "./ProfilePage.css";
import GridView from "./GridView";
import ToggleViews from "./ToggleView";
import { useParams } from "react-router-dom";
import TimelineView from "../../common/TimelineView";
import useFetchUserImages from "./utills/useFetchUserImages";
import ClipLoader from "react-spinners/ClipLoader";

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
    clearUser();
  }, [username]);

  useEffect(() => {
    postsData.fetchPosts(postsData.pageNumber);
  }, [postsData.pageNumber]);

  if (state.isLoading) {
    return (
      <ClipLoader
        color={document.documentElement.style.getPropertyValue(
          "--primaryMainColor"
        )}
      />
    );
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
