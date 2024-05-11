import { sessionOptions } from "@/lib/utils";
import { getAllBlogs } from "@/pages/api/blogs/getAllBlogs";
import axios from "axios";
import { getIronSession } from "iron-session";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { usePagination, useSortBy, useTable } from "react-table";

const columns = [
  {
    Header: "S.No.",
    accessor: "index",
  },
  {
    Header: "Image",
    accessor: "image",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Public Link",
    accessor: "id",
  },
  {
    Header: "Created At",
    accessor: "time",
  },
];

export async function getServerSideProps(context) {
  const session = await getIronSession(
    context.req,
    context.res,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const data = await getAllBlogs();

  return {
    props: {
      list: JSON.parse(JSON.stringify(data)),
    },
  };
}

const AllBlogsPage = ({ list }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState(list);
  const [selectedBlog, setSelectedBlog] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const data = useMemo(() => {
    // Filter the list based on the search query
    if (!searchQuery) {
      return blogs;
    } else {
      return blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }, [blogs, searchQuery]);

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
    const res = await axios.post("/api/blogs/delete", {
      id: selectedBlog,
    });
    if (res.status === 200) {
      const updatedData = blogs.filter((item) => item.id !== selectedBlog);
      setBlogs(updatedData);
      toast.success("Property Deleted");
    } else {
      toast.error("Error deleting the property");
    }
    setSelectedBlog("");
    setLoading(false);
    setOpen(false);
  };

  return (
    <div className="min-h-screen w-full flex justify-center  bg-gray-200">
      <div className="max-w-7xl w-full h-fit my-12 mx-auto p-4 bg-white shadow-md rounded-lg ">
        <div className="font-bold text-xl mb-2 ">Blogs Detail</div>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by Title"
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
                      className="px-4 py-4 text-left cursor-pointer font-bold text-black text-lg"
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
                      return (
                        <td
                          {...row.cells[columnIndex].getCellProps()}
                          className=" text-left w-56 overflow-hidden"
                          key={columnIndex}
                        >
                          {column.accessor === "image" ? (
                            <img
                              src={row.values[column.accessor]}
                              alt="Image"
                              className="h-16 w-16 rounded-lg"
                            />
                          ) : column.accessor === "id" ? (
                            <Link
                              href={`/blogs/${row.values[column.accessor]}`}
                              target="_blank"
                            >
                              Link
                            </Link>
                          ) : (
                            <p className="capitalize">
                              {row.values[column.accessor]}
                            </p>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-4 py-4 text-left">
                      <Link href={`/admin/blogs/edit/${row.original.id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-left">
                      <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => {
                          setSelectedBlog(row.original.id);
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
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageCount}
              </strong>{" "}
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
            Are you sure you want to delete this blog?
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

export default AllBlogsPage;
