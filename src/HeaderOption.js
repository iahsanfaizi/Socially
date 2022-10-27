import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  //using user data from redux store
  const user = useSelector(selectUser);
  return (
    <div className="headerOptions" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}

      {avatar && (
        <Avatar className="headerOption__icon">{user?.displayName[0]}</Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
