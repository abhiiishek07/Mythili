import Property from "@/components/Card/Property";
import Link from "next/link";
import { FaShop } from "react-icons/fa6";
import property_3_img from "@/assets/images/property_3.jpg";

const Commercial = () => {
  return (
    <div className=" flex justify-center px-4 ">
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

        <img
          src={property_3_img.src}
          alt="Banner Image"
          class=" w-full rounded-md h-96"
        />

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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          <Property />
          <Property />
          <Property />
          <Property />
          <Property />
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
