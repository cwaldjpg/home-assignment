import React from "react";

const Overlay = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className={`flex items-center justify-center absolute top-0 left-0 w-full h-full backdrop-blur-sm z-0 ${
        visible ? "animate-fadeIn z-20" : "opacity-0 hidden"
      }`}
    >
      <div className="w-12 h-12 rounded-full animate-spin border-[6px] border-orange-500 border-b-transparent"/>
    </div>
  );
};

export default Overlay;
