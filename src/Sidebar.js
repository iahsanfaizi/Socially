import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  //getting data from our redux store
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://cdn.pixabay.com/photo/2017/05/22/16/58/space-2334655_960_720.jpg"
          alt="BACKGROUND IMAGE"
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your ID</p>
          <p className="sidebar__statNumber">2.2k</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewes on Posts</p>
          <p className="sidebar__statNumber">1.3M</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Elon Musk")}
        {recentItem("FIFA 2022")}
        {recentItem("React JS")}
        {recentItem("Imran Khan")}
      </div>
    </div>
  );
};

export default Sidebar;
