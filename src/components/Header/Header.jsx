import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [crossBar, setCrossBar] = useState(false);
  return (
    <div className="navbar py-3 rounded-md sticky top-0 bg-base-100 z-10">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-3xl font-bold" href="/">
          Real Estate
        </Link>
      </div>

      <div className=" font-medium hidden md:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <details>
              <summary>Properties</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Commercial</a>
                </li>
                <li>
                  <a>Residental</a>
                </li>
                <li>
                  <a>Sco</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Resources</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Blogs</a>
                </li>
                <li>
                  <a>Location</a>
                </li>
                <li>
                  <a>Social Connect</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>contact us</a>
          </li>
        </ul>
      </div>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setCrossBar(!crossBar)}
      >
        {crossBar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {crossBar && (
        <div className="flex flex-col  absolute top-0 left-0 w-full h-screen bg-white bg-gradient-to-br from-base-200 to-bas">
          <ul className="menu menu-vertical px-1 uppercase mt-36 text-lg font-bold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <details>
                <summary>Properties</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Commercial</a>
                  </li>
                  <li>
                    <a>Residental</a>
                  </li>
                  <li>
                    <a>Sco</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Blogs</a>
                  </li>
                  <li>
                    <a>Location</a>
                  </li>
                  <li>
                    <a>Social Connect</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>contact us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
