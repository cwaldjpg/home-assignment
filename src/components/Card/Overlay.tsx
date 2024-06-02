import React from "react";
import Loader from 'components/Loader'

const Overlay = ({ visible }: { visible?: boolean }) => {
  return (
    <div
      className={`flex items-center justify-center absolute top-0 left-0 w-full h-full backdrop-blur-sm z-0 ${
        visible ? "animate-fadeIn z-20" : "opacity-0 hidden"
      }`}
    >
      <Loader />
    </div>
  );
};

export default Overlay;
