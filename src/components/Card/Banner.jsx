import React from "react";

const Banner = ({ image, key }) => {
  return (
    <div className="realtive" key={key}>
      <figure>
        <img
          src={image}
          alt="Banner"
          className="w-full h-screen object-cover lg:object-fill"
        />
      </figure>
      <div className="absolute top-0 left-0 w-full h-full  opacity-50 bg-gradient-to-t from-black to-gray-800"></div>
    </div>
  );
};

export default Banner;
