import React from "react";

export default function MyTips({ text }) {
  return (
    <div className="bg-green-1 text-white text-yellow-20 font-bold text-sm absolute rounded py-1 px-4 right-0 bottom-1/2 -translate-y-4 inline-flex">
      {text}
      <svg
        className="absolute text-green-1 h-2 w-full left-0 top-full"
        x="0px"
        y="0px"
        viewBox="0 0 255 255">
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  );
}
