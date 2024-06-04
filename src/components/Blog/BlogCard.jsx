import Link from "next/link";
import React from "react";

const BlogCard = ({ id, image, title, plainTextDescription, time }) => {
  return (
    <Link
      href={`/blogs/${id}`}
      className="max-w-md flex flex-col border p-3 rounded-lg shadow-md mx-2"
    >
      <div className="w-full h-48">
        <img
          src={image}
          alt={`image`}
          className="h-full w-full object-cover rounded-lg "
        />
      </div>
      <p className="font-bold text-xl text-black mt-2">{title}</p>
      <div className="line-clamp-4 my-2">
        {" "}
        <p>{plainTextDescription}</p>
      </div>
      <div className="flex items-center  gap-1 text-gray-400 ">
        <p>{time}</p> <p> - Mythili</p>
      </div>
    </Link>
  );
};

export default BlogCard;
