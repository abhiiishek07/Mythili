import React from "react";

const Banner = ({ image, key }) => {
  return (
    <div className="relative" key={key}>
      <img src={image} alt="Banner" className="w-full h-screen object-cover " />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 bg-gradient-to-t from-black to-gray-500"></div>
    </div>
  );
};

export default Banner;
