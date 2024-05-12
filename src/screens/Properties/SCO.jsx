import Property from "@/components/Card/Property";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdHomeWork } from "react-icons/md";
import EmptyData from "@/assets/images/Empty_Data.png";

const SCO = ({ data }) => {
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();

  const handleSearch = () => {
    let filtered = data;

    // Filter by status
    if (status) {
      filtered = filtered.filter((item) => item.status.name === status);
    }

    // Filter by location
    if (location) {
      filtered = filtered.filter((item) => item.city === location);
    }

    setFilteredData(filtered);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleClear = () => {
    setStatus("");
    setLocation("");
    setFilteredData(data);
  };

  const [currentPage, setCurrentPage] = useState(
    parseInt(router.query.page) - 1 || 0
  );
  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);

    let { query } = router;
    query.page = selectedPage.selected + 1;

    router.push({
      pathname: "/sco",
      query: query,
    });
  };

  return (
    <div className=" flex justify-center px-4 ">
      <div className="flex flex-col w-full max-w-6xl  mt-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Sco</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2">
          <p> SCO Properties </p>
          <MdHomeWork />
        </div>
        <img
          src="https://www.hindustantimes.com/ht-img/img/2023/12/20/550x309/DLF_shops_cum_office_project_in_Gurgaon_1703077004021_1703077012666.jpeg"
          alt="Banner Image"
          class="w-full h-96  rounded-md"
        />
        <div className="border w-full my-10 flex flex-col lg:flex-row p-4 justify-evenly bg-slate-50 rounded-md gap-4">
          <div className="flex gap-4 justify-center items-center">
            <p className="text-lg text-gray-900">Status</p>
            <select
              className="select select-bordered w-full font-bold"
              value={status}
              onChange={handleStatusChange}
            >
              <option disabled value="">
                Select
              </option>
              <option value="New Launch">New Launch</option>
              <option value="Under Construction">Under Construction</option>
              <option value="Ready To Move">Ready To Move</option>
            </select>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex gap-4 justify-center items-center ">
            <p className="text-lg text-gray-900">Location</p>
            <select
              className="select select-bordered w-full font-bold"
              value={location}
              onChange={handleLocationChange}
            >
              <option disabled value="">
                Select
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
            </select>
          </div>

          <div className="divider divider-horizontal"></div>
          <div className="flex  gap-3 items-center justify-center">
            <button
              className="btn bg-green-700 text-white hover:bg-green-700 px-10 uppercase"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="btn border-red-500 hover:bg-red-500 hover:text-white uppercase px-10 bg-white"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
        {currentItems.length === 0 ? (
          <div className="max-w-xl mx-auto my-5">
            <img src={EmptyData.src} alt="No property" />
            <p className="text-2xl text-center font-bold text-gray-400">
              Oops! No Property Found
            </p>
          </div>
        ) : (
          <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
              {currentItems.map((item, index) => (
                <Property key={index} data={item} />
              ))}
            </div>
            <div className="my-5">
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
                currentPage={currentPage}
                forcePage={currentPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SCO;
