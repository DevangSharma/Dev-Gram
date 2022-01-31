import React from "react";
import FeedPage from "../FeedPage";
import ProfilePage from "../ProfilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

function HomePage() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="*" element={<FeedPage />} />
        <Route path="/user/:username" element={<ProfilePage />} />
        <Route index element={<FeedPage />} />
      </Routes>
      {/* <FeedPage /> */}
      {/* <ProfilePage /> */}
    </div>
  );
}

export default HomePage;
