import React, { useState } from "react";

const BorderWrapper = ({ children, className }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onFocus: handleFocus,
        onBlur: handleBlur,
      });
    }
    return child;
  });

  return (
    <div className={`relative p-4 rounded-md ${className}`}>
      <div className="relative">{childrenWithProps}</div>
      {focused && (
        <div className={`absolute inset-0 rounded-md ${className}`}>
          <div
            className="w-full h-full border-2 rounded-md"
            style={{
              borderColor: "transparent",
              background: "linear-gradient(90deg, #00cea8 1.9%, #bf61ff 97.5%)",
              backgroundSize: "100% 100%",
              backgroundClip: "padding-box",
              transition: "width 2s, height 2s",
              width: focused ? "100%" : "0%",
              height: focused ? "100%" : "0%",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default BorderWrapper;
