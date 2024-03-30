import React from "react";
import { IoBedSharp } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";

const PropertyCard = ({ image }) => {
  return (
    <div className="card  w-full max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src={image?.src} alt="Shoes" className="h-44 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
{
  /* <div class="container mx-auto">
<div class="flex flex-wrap ">
  <div class="w-full p-4">
    <a
      href=""
      class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
    >
      <div class="relative pb-48 overflow-hidden">
        <figure>
          <img
            class="absolute inset-0 h-full w-full"
            src={image.src}
            alt=""
          />
        </figure>
      </div>
      <div class="p-4">
        <span class="inline-block px-2 py-1 leading-none border border-pink-500  rounded-full font-semibold uppercase tracking-wide text-xs">
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
</div> */
}
