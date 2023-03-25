import React from "react";
import RotationIndicator from "./RotationIndicator";

const RotationIndicatorWrapper = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
      }}
    >
      <RotationIndicator />
    </div>
  );
};

export default RotationIndicatorWrapper;
