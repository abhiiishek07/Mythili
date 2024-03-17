import React from "react";

const Banner = ({ image }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="Banner"
        className="w-full h-[37rem] object-cover "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </div>
  );
};

export default Banner;
