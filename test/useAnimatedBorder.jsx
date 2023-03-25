import { useState, useEffect } from "react";

export const useAnimatedBorder = (focusedInput, inputName) => {
  const [borderStyles, setBorderStyles] = useState({});

  useEffect(() => {
    const focusAnimation =
      "1s linear 0s 1 normal none running input-focus-animation";
    const blurAnimation =
      "1s linear 0s 1 normal none running input-blur-animation";

    if (focusedInput === inputName) {
      setBorderStyles({
        borderImageSource:
          "linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
        borderImageSlice: 1,
        borderRadius: "0.5rem",
        borderColor: "transparent",
        borderWidth: "1px",
        animation: focusAnimation,
      });
    } else {
      setBorderStyles({
        borderImageSource:
          "linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
        borderImageSlice: 0,
        borderRadius: "0.5rem",
        borderColor: "transparent",
        borderWidth: "1px",
        animation: blurAnimation,
      });
    }
  }, [focusedInput, inputName]);

  return [borderStyles];
};
