import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>SOCIALLY NEWS</h2>
        <InfoIcon />
      </div>
      {newsArticle("Imran Khan Long March", "BBC Official")}
      {newsArticle("Bitcoin Break 19K support 📉", "CRYPTO Latest")}
      {newsArticle("Elon Musk sells his TESLA shares", "Buisness Insiders")}
      {newsArticle("Data Analytics a new trend?", "Data Science is Fun")}
      {newsArticle("Russia And Ukrain", "Capital News")}
    </div>
  );
}

export default Widgets;
