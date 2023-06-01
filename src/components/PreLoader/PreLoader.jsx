import React, { useEffect } from "react";
import { preLoaderAnim } from "./PreLoaderAnim";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        width: "100%",
        background: "black",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        zIndex: "55",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      className="preloader"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          width: "600px",
          fontSize: "20px",
          fontWeight: "800",
          overflow: "hidden",
          color: "white",
        }}
        className="texts-container"
      >
        <span>Developer</span>
        <span>Life</span>
        <span>enjoy</span>
      </div>
    </div>
  );
};

export default PreLoader;
