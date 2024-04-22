import AdminDetails from "@/components/Card/AdminDetails";
import { ADMIN_PAGE_DETAILS } from "@/constants/constants";
import React from "react";

const Admin = () => {
  return (
    <div className="w-full max-w-5xl mx-auto  h-screen p-5">
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-700 mt-8">
        Admin Dashboard
      </h2>
      <div className="flex flex-col rounded-md  bg-base-200 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ADMIN_PAGE_DETAILS.map((item) => (
            <AdminDetails
              id={item.id}
              title={item.title}
              description={item.description}
              viewAllLink={item.viewAllLink}
              addNewLink={item.addNewLink}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
