"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Card = () => {
  const format = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  return (
    <div>
      <ProgressBar
        completed={60}
        bgColor="#75924B"
        isLabelVisible={false}
        height="0.4rem"
      />
    </div>
  );
};

export default Card;
