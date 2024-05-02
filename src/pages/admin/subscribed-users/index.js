import React from "react";
import { MdDelete } from "react-icons/md";

const SubscribedUsersPage = () => {
  const userData = [
    {
      id: 1,
      email: "john@example.com",
      date: "2024-05-01",
    },
    {
      id: 2,
      email: "jane@example.com",
      date: "2024-04-30",
    },
    {
      id: 3,
      email: "jack@example.com",
      date: "2024-04-29",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Subscribed Users</div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-lg bg-base-200">
                  <th>ID</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping through user data to display information */}
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.date}</td>
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

export default SubscribedUsersPage;
