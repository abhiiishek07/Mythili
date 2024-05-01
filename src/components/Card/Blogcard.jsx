import React from "react";
import { PiBookmarks } from "react-icons/pi";

const Blogcard = () => {
  return (
    <div className="grid w-full min-h-64">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/3">
          <img
            src="https://blog.tkelevator.com/wp/wp-content/uploads/2018/06/shutterstock_464879318-scaled.jpg"
            alt="Blog 1"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-6 w-2/3 flex flex-col items-center">
          <PiBookmarks size={35} />
          <div className="flex items-center flex-col py-3">
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
              5 Tips for First-Time Homebuyers
            </h3>
            <p className="text-gray-600">
              Learn valuable advice for navigating the home buying process for
              the first time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
