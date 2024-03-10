import React from "react";
import PropertyCard from "@/components/Card/PropertyCard";

const Commercial = () => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-hidden px-6 md:px-10 py-2 my-6">
      {/* Heading section */}
      <div className=" items-start justify-start mx-9 rounded-md max-w-md py-2">
        <p className="text-2xl font-bold ">Commercial Property</p>
        <p className="text-sm text-gray-600">
          Explore our range of commercial properties for your business needs.
        </p>
      </div>
      <span className="w-full flex border border-gray-300 my-2 mx-8"></span>
      {/* property card division */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 ">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default Commercial;
