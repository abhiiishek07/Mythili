import React from "react";
import PropertyCard from "@/components/Card/PropertyCard";
import { FaShop } from "react-icons/fa6";
import Link from "next/link";

const Commercial = () => {
  return (
    <div className="min-h-screen w-full flex justify-center px-4">
      <div className="flex flex-col w-full max-w-6xl  mt-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Commercial</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2">
          <p> Commercial Properties </p>
          <FaShop />
        </div>
        <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-gray-900 before:opacity-50 before:z-10 before:rounded-md">
          <img
            src="https://www.insight-law.co.uk/wp-content/uploads/2022/02/A-guide-to-investing-in-Londons-commercial-property-market-1024x575.png"
            alt="Banner Image"
            class="absolute inset-0 w-full h-full object-cover rounded-md"
          />
          <div class="min-h-[300px] relative  h-full z-10  flex justify-center items-center text-center text-white text-lg  p-6 rounded-md">
            Explore our range of commercial properties for your business needs.
          </div>
        </div>
        <div className="border w-full my-10 flex flex-col lg:flex-row p-4 justify-evenly bg-slate-50 rounded-md gap-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-gray-900">Status</p>
            <select className="select select-bordered w-full font-bold">
              <option disabled selected>
                Select
              </option>
              <option>Ready to move</option>
              <option>Under</option>
            </select>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex flex-col justify-center items-center ">
            <p className="text-lg text-gray-900">Location</p>
            <select className="select select-bordered w-full font-bold">
              <option disabled selected>
                Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-gray-900">Min. Price</p>
            <select className="select select-bordered w-full font-bold">
              <option disabled selected>
                Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-gray-000">Max. Price</p>
            <select className="select select-bordered w-full font-bold">
              <option disabled selected>
                Select
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex  gap-3 items-center justify-center">
            <button className="btn bg-green-500 text-white hover:bg-green-500 px-4">
              Search
            </button>
            <button className="btn border-secondary hover:bg-secondary px-4 bg-white">
              Clear
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default Commercial;
{
  /* <div className="min-h-screen w-full flex flex-col overflow-hidden px-6 md:px-10 py-2 my-6">

<div className=" items-start justify-start mx-9 rounded-md max-w-md py-2">
  <p className="text-2xl font-bold ">Commercial Property</p>
  <p className="text-sm text-gray-600">
    Explore our range of commercial properties for your business needs.
  </p>
</div>
<span className="w-full flex border border-gray-300 my-2 mx-8"></span>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 ">
  <PropertyCard />
  <PropertyCard />
  <PropertyCard />
  <PropertyCard />
</div>
</div> */
}
