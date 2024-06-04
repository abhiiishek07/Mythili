import Property from "@/components/Card/Property";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAllProperties } from "../api/properties/getAllProperties";
import { useRouter } from "next/router";
import EmptyData from "@/assets/images/searching_home.png";

export async function getServerSideProps() {
  const data = await getAllProperties();

  return {
    props: {
      data,
    },
  };
}

const AllPropertiesPage = ({ data }) => {
  const router = useRouter();
  const { property, location, status, state } = router.query;
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Decode the query parameters if needed
    const decodedLocation = location ? decodeURIComponent(location) : "";

    // Filter data based on decoded query parameters
    let filtered = [...data];

    if (decodedLocation) {
      filtered = filtered.filter(
        (item) => item.city.toLowerCase() === decodedLocation.toLowerCase()
      );
    }
    if (state) {
      filtered = filtered.filter((item) => item.id === state);
    }
    if (status) {
      filtered = filtered.filter((item) => item.status.value === status);
    }

    setFilteredData(filtered);
  }, [location, state, status]);

  return (
    <div>
      {/* BANNNER */}
      <div className="w-full bg-banner">
        <div className="w-full h-full bg-black bg-opacity-60 flex items-center">
          <div className="container pl-4 lg:pl-28">
            <h1 className="mt-2 text-2xl font-bold  lg:text-4xl  text-white">
              All Properties
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
            <li className="text-green-600 font-bold">All Properties</li>
          </ul>
        </div>
        {/* DIVIDER */}
        <div className="divider m-0 p-0 h-1 mb-10"></div>

        {/* ALL PROPERTIES */}
        {filteredData.length === 0 && (
          <div className="max-w-xl mx-auto my-5 w-full">
            <img src={EmptyData.src} alt="No property" />
            <p className="text-xl text-center  text-gray-400">
              Oops! We were not able to find any property.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {filteredData.map((item, index) => (
            <Property key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesPage;
