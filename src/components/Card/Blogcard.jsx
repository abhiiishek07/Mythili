import React from "react";
import { PiBookmarks } from "react-icons/pi";

const Blogcard = () => {
  return (
    <div className="flex">
      <div className="card card-compact w-96 bg-base-100 mx-3">
        <figure className="rounded-2xl">
          <img
            src ="https://blog.tkelevator.com/wp/wp-content/uploads/2018/06/shutterstock_464879318-scaled.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">5 Tips for First Time Homebuyers</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis maxime sequi rem. Modi voluptatibus ipsam soluta, dicta ipsa impedit.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
