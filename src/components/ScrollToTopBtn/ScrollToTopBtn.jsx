import React from "react";
import { PiArrowCircleUpFill } from "react-icons/pi";

const ScrollToTopBtn = () => {
  return (
    <PiArrowCircleUpFill
      className="scroll-to-top-icon"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    />
  );
};

export default ScrollToTopBtn;
