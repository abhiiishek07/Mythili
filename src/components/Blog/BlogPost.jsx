import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const BlogPost = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://etimg.etb2bimg.com/photo/106611956.cms"
        alt="Blog post"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Is Elan Imperial Mall the Next Big Thing in Gurgaon?
        </h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button className="w-full py-2 text-center text-white bg-green-500 hover:bg-green-600 hover:text-green-200 rounded-lg transition duration-300 ease-in-out cursor-pointer flex items-center justify-center ">
          <span className="text-lg">Read more </span>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
