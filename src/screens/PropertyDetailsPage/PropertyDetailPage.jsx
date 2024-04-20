import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const PropertyDetailPage = () => {
  // Dummy data for demonstration
  const userData = [
    { id: 1, title: "John Doe", location: "Delhi" },
    { id: 2, title: "M3M", location: "Noida" },
    { id: 3, title: "Apartments", location: "Delhi" },
    // Add more dummy data as needed
  ];

  // State variables for search query and filtered data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(userData);

  // Function to handle changes in the search query
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Filter user data based on the search query
    const filtered = userData.filter(
      (property) =>
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Property Details</div>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={handleSearch}
          />
          {/* Table to display filtered user information */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-lg bg-base-200">
                  <th>ID</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((property) => (
                  <tr key={property.id}>
                    <th>{property.id}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold flex-wrap">
                            {property.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{property.location}</td>
                    <td>
                      <button className="btn bg-green-300 hover:bg-green-500 focus:bg-green-700 flex items-center justify-center gap-1">
                        <span>Edit</span>
                        <MdEdit className="text-lg" />
                      </button>
                    </td>
                    <td>
                      <button className="btn bg-red-300 hover:bg-red-500 focus:bg-red-700 flex items-center justify-center gap-1">
                        <span>Delete</span>
                        <MdDelete className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
