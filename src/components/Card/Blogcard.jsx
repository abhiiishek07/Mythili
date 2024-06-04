import React from "react";
import { PiBookmarks } from "react-icons/pi";

const Blogcard = ({ key, id, image, title, description }) => {
  return (
    <div className="flex" key={key}>
      <div className="card card-compact w-96 bg-base-100 mx-3">
        <figure className="rounded-2xl">
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{title}</h2>
          <p className="text-center line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
