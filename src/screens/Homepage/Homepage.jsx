import React from "react";
import Buildings from "@/assets/Lottie/Buildings.json";
import Lottie from "lottie-react";
import Slider from "react-slick";
import { A_PLUS_DEVELOPERS, SLIDER_SETTINGS } from "@/constants/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationOutline } from "react-icons/io5";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center overflow-hidden px-4 ">
      <div className="w-full flex flex-col lg:flex-row  max-w-6xl justify-evenly items-center h-fit mt-16 gap-3">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col text-5xl font-bold">
            <p>Find your new</p>
            <p>dream home</p>
          </div>
          <p className="max-w-xs text-pretty text-lg">
            With a vast array of properties, HomeKey Props is dedicated to
            helping you find your perfect home seamlessly. Explore our curated
            listings today.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <IoLocationOutline />
            <input
              type="text"
              className="grow rounded-lg"
              placeholder="Search a property..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="bg-base-100 ">
          <Lottie animationData={Buildings} className="max-w-xl" />
        </div>
      </div>
      <div className="w-full  mt-12 flex flex-col gap-3 items-center justify-center mb-10">
        <p className="font-bold text-3xl">Trusted Partners</p>
        <p className="text-lg">
          We partner with the finest to ensure your home buying experience is
          second to none. See who stands behind us.
        </p>
        <div className="w-full max-w-5xl mt-2 py-4 relative ">
          <Slider {...SLIDER_SETTINGS}>
            {A_PLUS_DEVELOPERS.map((developer, index) => (
              <div className="relative" key={index}>
                <p className="font-bold">{developer}</p>
              </div>
            ))}
          </Slider>
          <div className="absolute top-0 left-0 w-10 md:w-32 h-full bg-gradient-to-r from-gray-50 rounded-md"></div>
          <div className="absolute top-0 right-0 w-10 md:w-32 h-full bg-gradient-to-l from-gray-50 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
