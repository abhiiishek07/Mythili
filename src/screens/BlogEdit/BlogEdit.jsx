// Importing necessary modules
import React from "react";
import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const BlogEdit = () => {
  const userData = [
    {
      id: 1,
      title: "Why to buy in Gurugram",
      sub_information: "New Delhi",
      link: "abcd.com",
    },
    {
      id: 2,
      title: "Top Properties among ...",
      sub_information: "Gurugram",
      link: "abcd.com",
    },
    {
      id: 3,
      title: "Builder M3M largest residentials building",
      sub_information: "Noida",
      link: "abcd.com",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Blogs Details</div>
          {/* Table to display user information */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-base-200 text-lg">
                  <th>ID</th>
                  <th>Title</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {userData.map((blogs) => (
                  <tr key={blogs.id}>
                    <td>{blogs.id}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold flex-wrap">
                            {blogs.title}
                          </div>
                          <div className="text-sm opacity-50">
                            {blogs.sub_information}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className="btn bg-green-300 hover:bg-green-500 focus:bg-green-700 flex items-center justify-center gap-1">
                        <span>Edit</span>
                        <MdEdit className="text-lg" />
                      </button>
                    </td>
                    <td>
                      <button className="btn bg-red-300 hover:bg-red-500 focus:bg-red-700 flex items-center justify-center gap-1">
                        <span>Delete</span>
                        <MdDelete className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEdit;
