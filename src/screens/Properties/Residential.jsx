import Property from "@/components/Card/Property";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import property_4_img from "@/assets/images/property_4.jpg";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination/Pagination";
import EmptyData from "@/assets/images/Empty_Data.png";

const Residential = ({ data }) => {
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();

  const [uniqueCities, setUniqueCities] = useState([]);
  useEffect(() => {
    const cities = data.map((item) => item.city);
    setUniqueCities([...new Set(cities)]);
  }, [data]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handleSearch = () => {
    setCurrentPage(0);
    let { query } = router;
    query.page = 1;

    router.push({
      pathname: "/residential",
      query: query,
    });

    let filtered = data;

    if (status) {
      filtered = filtered.filter((item) => item.status.name === status);
    }
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
    setCurrentPage(0);
    let { query } = router;
    query.page = 1;

    router.push({
      pathname: "/residential",
      query: query,
    });
    setStatus("");
    setLocation("");
    setFilteredData(data);
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);

    let { query } = router;
    query.page = selectedPage.selected + 1;

    router.push({
      pathname: "/residential",
      query: query,
    });
  };

  return (
    <div>
      {/* BANNNER */}
      <div className="w-full bg-banner_residential">
        <div className="w-full h-full bg-black bg-opacity-60 flex items-center">
          <div className="container pl-4 lg:pl-28">
            <h1 className="mt-2 text-2xl font-bold  lg:text-4xl  text-white">
              Residential Properties
            </h1>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl w-full mx-auto my-6 px-3">
        {/* BREADCRUMBS */}
        <div className="text-sm breadcrumbs font-bold">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="text-green-600 font-bold">Residential Properties</li>
          </ul>
        </div>
        {/* DIVIDER */}
        <div className="divider m-0 p-0 h-1 mb-10"></div>
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
          <div className="flex gap-4 justify-center items-center">
            <p className="text-lg text-gray-900">Location</p>
            <select
              className="select select-bordered w-full font-bold"
              value={location}
              onChange={handleLocationChange}
            >
              <option disabled value="">
                Select
              </option>
              {uniqueCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
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

        {/* ALL PROPERTIES */}
        {currentItems.length === 0 ? (
          <div className="max-w-xl mx-auto my-5 w-full">
            <img src={EmptyData.src} alt="No property" />
            <p className="text-2xl text-center font-bold text-gray-400">
              Oops! No Property Found
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
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

export default Residential;
