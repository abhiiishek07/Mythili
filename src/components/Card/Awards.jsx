import React from "react";
import Link from "next/link";
const Awards = ({ imageSrc, title, description, link }) => {
  return (
    <Link
      href="/google.com"
      target="_blank"
      className="bg-white overflow-hidden shadow rounded-lg"
    >
      <img
        src={`https://i0.wp.com/goelgangadevelopments.com/wp-content/uploads/2022/11/Goel-Ganga.png?fit=1140%2C500&ssl=1`}
        alt="Award Image"
        className="h-28 w-full object-cover"
      />
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Awards;
