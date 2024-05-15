import Link from "next/link";
import { useRouter } from "next/router";
import { IoLocationSharp } from "react-icons/io5";
import { LuIndianRupee } from "react-icons/lu";
import { MdWorkspacesFilled } from "react-icons/md";

const Property = ({ data }) => {
  const router = useRouter();
  return (
    <div className="px-3">
      <div className="rounded-lg shadow-sm border hover:shadow-md group  h-[28rem]">
        <Link href={`/property/${data.id}`}>
          <div className="relative overflow-hidden">
            <img
              class=" object-cover h-56 w-full rounded-t-lg "
              src={
                data.images[0] ||
                "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              }
              alt=""
            />
            <div className="absolute top-0 right-0 mt-2 flex  gap-2 p-1">
              <div className="rounded-full  px-4 py-1 bg-blue-600">
                <p className="text-xs text-white">{data.status.name}</p>
              </div>
              {}
              {router.pathname === "/properties" && (
                <div className="rounded-full  px-4 py-1 bg-teal-500">
                  <p className="text-xs text-white capitalize">{data.type}</p>
                </div>
              )}
            </div>
          </div>

          <div className="px-5">
            <h2 className="mt-1 text-2xl font-bold">{data.title}</h2>
            <div className="line-clamp-2 text-xs text-gray-400">
              <p>{data.plainTextDescription}</p>
            </div>
            <div className="mt-2 grid ">
              <div>
                <div className="flex items-center gap-1">
                  <IoLocationSharp className="group-hover:text-green-700" />
                  <p>{data.city}</p>
                </div>
                <p className="text-xs pl-2 text-gray-400 line-clamp-1">
                  {data.address}
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-1 mt-2 col-span-1">
              <MdWorkspacesFilled className="group-hover:text-green-700" />
              <p>{data.size}</p>
            </div>

            <div className="divider m-0 p-0 h-1 my-2" />

            <div class=" flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <LuIndianRupee size={20} />
                <p className="flex items-center justify-center text-sm lg:text-lg  font-bold ">
                  <span className="pr-2"> {data.price} Onwards* </span>
                </p>
              </div>
              <button className="py-1 px-3 rounded-md items-center bg-green-700  border-white text-white">
                <p className="text-sm lg:text-lg"> View Details</p>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Property;

{
  /* <div class="w-full bg-white shadow-sm hover:shadow-md rounded-lg overflow-hidden">
<Link href={`/property/${data.id}`} class=" ">
  <div class="relative pb-48 overflow-hidden">
    <img
      class="absolute inset-0 h-full w-full object-cover"
      src={
        data.images[0] ||
        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      }
      alt=""
    />
  </div>
  <div class="p-4">
    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
      {data.status.name}
    </span>
    <h2 class="mt-2 mb-2 text-xl font-extrabold">{data.title}</h2>
  </div>

  <div class="flex p-1 pt-2 justify-around">
    <div className="flex  items-center justify-center">
      <span class="items-center justify-center m-1 p-2 rounded-full bg-gray-500 text-lg text-white">
        <FaLocationDot />
      </span>
      <p>{data.city}</p>
    </div>
    <div className="flex  items-center justify-center">
      <span class="items-center justify-center m-1 p-2 rounded-full bg-gray-500 text-lg text-white">
        <FaRegSquare />
      </span>
      <p>{data.size} Sq.Ft</p>
    </div>
  </div>
  <div class="p-4 flex items-center justify-between">
    <p className="flex items-center justify-center text-  font-semibold ">
     
      <span className="pr-2"> {data.price} Onwards </span>
    </p>
    <button className="py-1 px-3 rounded-md items-center bg-[#006039] border-white text-white">
      View Details
    </button>
  </div>
</Link>
</div> */
}
