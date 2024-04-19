// Importing necessary modules
import React from "react";
import { RxAvatar } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

const ContactUsDetails = () => {
  const userData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "9191902101",
      property: "M3Ms",
      whatsappConfirmation: false,
      message: "want all info about this property",
    },
    {
      id: 2,
      name: "John mill",
      email: "john@example.com",
      phone: "9191902101",
      property: "M3Ms",
      whatsappConfirmation: false,
      message: "want all info about this property",
    },
    {
      id: 3,
      name: "John David",
      email: "john@example.com",
      phone: "9191902101",
      property: "M3Ms",
      whatsappConfirmation: false,
      message: "want all info about this property",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Interested People</div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-lg bg-base-200">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Property Info Required</th>
                  <th>Whatsapp Confirmation</th>
                  <th>Message</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping through user data to display information */}
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <RxAvatar className="text-4xl" />
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm opacity-50">
                            {user.country}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.property}</td>
                    <td>{user.whatsappConfirmation ? "Yes" : "No"}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Read Message
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <p className="py-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore possimus molestiae delectus tempora quis deleniti impedit ipsum, labore nesciunt porro incidunt. Dolor a ipsa aliquam ad nostrum facere est ducimus!
                          </p>
                        </div>
                      </dialog>
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

export default ContactUsDetails;
