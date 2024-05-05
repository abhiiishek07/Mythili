import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";

const AdminDetails = ({
  title,
  description,
  viewAllLink,
  addNewLink,
  Icon,
}) => {
  return (
    <div className="group hover:border-green-700 transition-all duration-300 flex flex-col items-start p-6 rounded-lg shadow-md bg-base-100 border">
      <div className="flex items-center justify-center">
        <Icon size={22} className="mr-2 pb-1" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 py-2">{description}</p>
      {/* Buttons for View All and Add */}
      <div className="flex justify-end w-full mt-2 gap-4">
        <Link href={viewAllLink}>
          <button className="btn bg-primary text-white">View All</button>
        </Link>
        {addNewLink && (
          <Link href={addNewLink}>
            <button className="btn bg-green-700 text-white">Add New</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdminDetails;
