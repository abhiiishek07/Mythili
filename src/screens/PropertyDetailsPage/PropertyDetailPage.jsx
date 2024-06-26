import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { MdEdit, MdDelete } from "react-icons/md";
import { TbWorldOff, TbWorldUp } from "react-icons/tb";
import { useTable, useSortBy, usePagination } from "react-table";

const columns = [
  {
    Header: "S.No.",
    accessor: "index",
  },
  {
    Header: "Name",
    accessor: "title",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Published",
    accessor: "isPublic",
  },
];

const PropertyDetailPage = ({ list }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState(list);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const data = useMemo(() => {
    // Filter the list based on the search query
    if (!searchQuery) {
      return properties;
    } else {
      return properties.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }, [properties, searchQuery]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    pageCount,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  const handleDelete = async () => {
    setLoading(true);
    const res = await axios.post("/api/properties/delete", {
      id: selectedProperty,
    });
    if (res.status === 200) {
      const updatedData = properties.filter(
        (item) => item.id !== selectedProperty
      );
      setProperties(updatedData);
      toast.success("Property Deleted");
    } else {
      toast.error("Error deleting the property");
    }
    setSelectedProperty("");
    setLoading(false);
    setOpen(false);
  };

  const handlePublish = async (id, isPublic) => {
    const isPublished = !isPublic;
    const res = await axios.post("/api/properties/toggle-publish", {
      propertyId: id,
      isPublic: isPublished,
    });

    if (res.status === 200) {
      const updatedProperties = properties.map((property) =>
        property.id === id ? { ...property, isPublic: isPublished } : property
      );
      setProperties(updatedProperties);
      {
        isPublished
          ? toast.success("Congratulations🎉 !  Property is now live ")
          : toast.success("Property is now unpublished");
      }
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center  bg-gray-200">
      <div className="max-w-7xl w-full h-fit my-12 mx-auto p-4 bg-white shadow-md rounded-lg ">
        <div className="font-bold text-xl mb-2 ">Property Details</div>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by Name, Location or Type..."
          className="input input-bordered w-full p-2 mb-4 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Table to display filtered user information */}
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-4 py-4 text-left cursor-pointer "
                      key={column.id}
                    >
                      {column.render("Header")}
                      {column.isSorted && (
                        <span>{column.isSortedDesc ? " ⬇️ " : " ⬆️ "}</span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={`hover:bg-base-200 ${rowIndex}`}
                    key={rowIndex}
                  >
                    {columns.map((column, columnIndex) => {
                      return column.accessor !== "isPublic" ? (
                        <td
                          {...row.cells[columnIndex].getCellProps()}
                          className="text-left w-56 overflow-hidden"
                          key={columnIndex}
                        >
                          <div className="line-clamp-1">
                            <p className="capitalize">
                              {row.values[column.accessor]}
                            </p>
                          </div>
                        </td>
                      ) : (
                        <td className="p-4 text-left" key={columnIndex}>
                          <button
                            className="btn btn-outline btn-success btn-sm"
                            onClick={() =>
                              handlePublish(
                                row.original.id,
                                row.values.isPublic
                              )
                            }
                          >
                            {row.values.isPublic ? (
                              <div className="flex items-center gap-1">
                                Unpublish <TbWorldOff size={16} />
                              </div>
                            ) : (
                              <div className="flex items-center gap-1">
                                Publish <TbWorldUp size={16} />
                              </div>
                            )}
                          </button>
                        </td>
                      );
                    })}

                    <td className="px-4 py-4 text-left">
                      <Link href={`/admin/properties/edit/${row.original.id}`}>
                        <button className="btn btn-outline btn-primary text-xs btn-sm">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-left">
                      <button
                        className="btn btn-outline btn-secondary text-xs btn-sm"
                        onClick={() => {
                          setSelectedProperty(row.original.id);
                          setOpen(true);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {pageCount > 1 && (
          <div className="flex justify-center mt-4 gap-4 bg-gray-100 py-4 items-center">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button
              onClick={previousPage}
              disabled={!canPreviousPage}
              className="btn btn-neutral"
            >
              Prev
            </button>
            <span>
              Page <strong>{pageIndex + 1}</strong>/<strong>{pageCount}</strong>{" "}
            </span>
            <button
              onClick={nextPage}
              disabled={!canNextPage}
              className="btn btn-neutral"
            >
              Next
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
          </div>
        )}
      </div>
      <dialog id="my_modal_3" className="modal" open={open}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this property ?
          </h3>
          <div className="w-full justify-center flex gap-4 my-4">
            <button className="btn btn-secondary" onClick={handleDelete}>
              {loading && (
                <span className="loading loading-spinner loading-md"></span>
              )}
              Delete
            </button>
            <button
              className="btn btn-outline btn-primary"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PropertyDetailPage;
