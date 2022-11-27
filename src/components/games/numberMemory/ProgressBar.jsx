import React from "react";

function ProgressBar({ filled }) {
  return (
    <div>
      <div className="progress-bar">
        <div
          style={{
            height: "5px",
            width: `calc(1% * ${100 - filled})`,
            backgroundColor: "white",
            transition: "width 0.1s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
