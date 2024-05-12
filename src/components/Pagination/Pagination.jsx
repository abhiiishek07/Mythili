import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      // pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="Prev"
      containerClassName="flex justify-center "
      pageClassName=" "
      pageLinkClassName="px-2 py-1 rounded-full "
      activeLinkClassName="bg-green-700 text-white px-3 py-1 rounded-full "
      previousClassName="mx-2 border-[1px] rounded-full px-1"
      nextClassName="mx-2 border-[1px] rounded-full px-1"
      previousLinkClassName=" px-3 py-1 rounded-full"
      nextLinkClassName="px-3 py-1 rounded-full "
      pageRangeDisplayed={4} // Set to 4 to limit the displayed page range
      marginPagesDisplayed={1} // Adjust as needed
      forcePage={parseInt(currentPage)}
    />
  );
};

export default Pagination;
