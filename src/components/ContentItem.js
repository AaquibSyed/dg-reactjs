import React from "react";
import "./ContentItem.css";

function ContentItem({ title, poster }) {
  return (
    <div className="contentItem">
      <div className="poster">
        <img
          className="poster__image"
          src={`./posters/${poster}`}
          alt="poster"
        />
      </div>
      <div className="title">
        <p className="title__text">{title}</p>
      </div>
    </div>
  );
}

export default ContentItem;
