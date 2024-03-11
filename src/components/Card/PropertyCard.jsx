import React from "react";
import { IoBedSharp } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";

const PropertyCard = () => {
  return (
    <div class="container mx-auto">
      <div class="flex flex-wrap ">
        <div class="w-full p-4">
          <a
            href=""
            class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
          >
            <div class="relative pb-48 overflow-hidden">
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
            <div class="p-4">
              <span class="inline-block px-2 py-1 leading-none bg-secondary text-white rounded-full font-semibold uppercase tracking-wide text-xs">
                Under Construction
              </span>
              <h2 class="mt-2 mb-2  font-bold">
                Purus Ullamcorper Inceptos Nibh
              </h2>
              <div className="line-clamp-2 text-sm">
                {" "}
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec ullamcorper nulla non metus auctor fringilla.
                </p>
              </div>
            </div>
            <span className="border border-gray-300 flex"></span>
            <div class="flex p-1 pt-2 justify-around">
              <div className="flex flex-col items-center justify-center">
                <span class="items-center justify-center m-1 p-2 rounded-full bg-gray-500 text-lg text-white">
                  <IoBedSharp />
                </span>
                <p>Beds</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span class="items-center justify-center m-1 p-2 rounded-full bg-gray-500 text-lg text-white">
                  <FaBath />
                </span>
                <p>Beds</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span class="items-center justify-center m-1 p-2 rounded-full bg-gray-500 text-lg text-white">
                  <FaRegSquare />
                </span>
                <p>Beds</p>
              </div>
            </div>
            <div class="p-4 flex items-center justify-between">
              <p className="flex items-center justify-center text-lg  font-semibold ">
                <LuIndianRupee />
                <span> 1.25 </span> Cr* Onwards
              </p>
              <button className="py-1 px-3 rounded-md items-center bg-green-500 border-white text-white">
                View Details
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
