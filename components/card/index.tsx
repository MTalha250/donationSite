"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface Props {
  image: string;
  donations: number;
  title: string;
  totalAmount: number;
  amountRaised: number;
  first?: boolean;
}

const Card = ({
  image,
  donations,
  title,
  totalAmount,
  amountRaised,
  first,
}: Props) => {
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
    <div
      className={
        "w-full h-full flex flex-col rounded-lg overflow-hidden p-2 hover:bg-slate-50 transition duration-200 " +
        (first ? "col-span-2 row-span-2 pr-5" : "")
      }
    >
      <div
        className={
          "rounded-xl overflow-hidden relative w-full" +
          (first ? " h-full" : " h-[20vh]")
        }
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full hover:scale-105 transition duration-200 object-cover"
        />
        <span className="absolute bottom-3 left-3">
          <span className="bg-black/50 text-white py-1 px-2 rounded-full text-sm tracking-tight font-medium">
            {format(donations)} donations
          </span>
        </span>
      </div>
      <h1 className="font-bold mt-4">{title}</h1>
      <div>
        <ProgressBar
          completed={
            amountRaised >= totalAmount
              ? 100
              : (amountRaised / totalAmount) * 100
          }
          bgColor="#75924B"
          isLabelVisible={false}
          height="0.25rem"
          className="mt-10"
        />
        <p className="text-sm font-bold mt-2">
          PKR {amountRaised.toLocaleString()} raised
        </p>
      </div>
    </div>
  );
};

export default Card;
