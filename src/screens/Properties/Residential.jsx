import Property from "@/components/Card/Property";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import property_4_img from "@/assets/images/property_4.jpg";

const Residential = ({data}) => {
  return (
    <div className=" flex justify-center px-4 ">
      <div className="flex flex-col w-full max-w-6xl  mt-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Residential</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2">
          <p> Residential Properties </p>
          <FaHome />
        </div>
        <img
          src={property_4_img.src}
          alt="Banner Image"
          class=" w-full h-96 rounded-md "
        />
        {/* <div class="relative card font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-gray-900 before:opacity-50 before:z-10 before:rounded-md">
          <div class=" relative  h-96 z-10  flex justify-center items-center text-center text-white text-lg  p-6 rounded-md">
            Explore our range of Residential properties for your personal needs.
          </div>
        </div> */}

        <div className="border w-full my-10 flex flex-col lg:flex-row p-4 justify-evenly bg-slate-50 rounded-md gap-4">
          <div className="flex gap-4 justify-center items-center">
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
          <div className="flex gap-4  justify-center items-center ">
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
          <div className="flex  gap-3 items-center justify-center">
            <button className="btn bg-green-500 text-white hover:bg-green-500 px-10">
              Search
            </button>
            <button className="btn border-red-500 hover:border-red-500 px-10 bg-white">
              Clear
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {data.map((item,index) => (
            <Property key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Residential;
