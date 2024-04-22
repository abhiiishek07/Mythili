import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";

const AdminDetails = ({
  id,
  title,
  description,
  viewAllLink,
  addNewLink,
  Icon,
}) => {
  return (
    <div
      key={id}
      className="hover:scale-105 duration-300 flex flex-col items-start p-6 rounded-lg shadow-md bg-base-100 border"
    >
      <div className="flex items-center justify-center">
        <Icon size={22} className="mr-2 pb-1" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 py-2">{description}</p>
      {/* Buttons for View All and Add */}
      <div className="flex justify-between w-full mt-2">
        <Link href={viewAllLink}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View All
          </button>
        </Link>
        {addNewLink && (
          <Link href={addNewLink}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Add New
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdminDetails;
