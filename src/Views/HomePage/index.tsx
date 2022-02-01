import React from "react";
import FeedPage from "../FeedPage";
import ProfilePage from "../ProfilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { setInitialTheme } from "../../utils/getTheme";

function HomePage() {
  setInitialTheme();
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="*" element={<FeedPage />} />
        <Route path="/user/:username" element={<ProfilePage />} />
        <Route index element={<FeedPage />} />
      </Routes>
    </div>
  );
}

export default HomePage;
