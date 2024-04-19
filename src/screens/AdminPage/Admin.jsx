import React from 'react';
import { FiSettings, FiBook, FiUsers } from 'react-icons/fi'; // Import icons

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-700">Admin Dashboard</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Property Details Section */}
                <div className="admin-section-link">
                  <a href="#property-details" className="section-button hover:bg-blue-100 flex flex-col items-start p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <FiSettings className="mr-4 text-blue-500" />
                      <h3 className="text-xl font-semibold mb-2">Property Details</h3>
                    </div>
                    <p className="text-sm text-gray-600">Manage property details here...</p>
                    {/* Buttons for View All and Add */}
                    <div className="flex justify-between w-full mt-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View All
                      </button>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Add New
                      </button>
                    </div>
                  </a>
                </div>
                {/* Blogs Section */}
                <div className="admin-section-link">
                  <a href="#blogs" className="section-button hover:bg-yellow-100 flex flex-col items-start p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <FiBook className="mr-4 text-yellow-500" />
                      <h3 className="text-xl font-semibold mb-2">Blogs</h3>
                    </div>
                    <p className="text-sm text-gray-600">Manage blogs here...</p>
                    {/* Buttons for View All and Add */}
                    <div className="flex justify-between w-full mt-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View All
                      </button>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Add New
                      </button>
                    </div>
                  </a>
                </div>
                {/* Interested People Info Section */}
                <div className="admin-section-link">
                  <a href="#interested-people" className="section-button hover:bg-green-100 flex flex-col items-start p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <FiUsers className="mr-4 text-green-500" />
                      <h3 className="text-xl font-semibold mb-2">Interested People Info</h3>
                    </div>
                    <p className="text-sm text-gray-600">Manage interested people info here...</p>
                    {/* Buttons for View All and Add */}
                    <div className="flex justify-between w-full mt-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View All
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
