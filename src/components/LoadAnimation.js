// This component displays a loading animation when loading an application
// can also be used when fetching data from external source "API"
import React from "react";
import "./LoadAnimation.css";

const LoadAnimation = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadAnimation;
