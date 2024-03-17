import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [crossBar, setCrossBar] = useState(false);

  return (
    <div className="navbar py-3 rounded-md sticky top-0 bg-base-100 z-20 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-3xl font-bold" href="/">
          Real Estate
        </Link>
      </div>

      <div className=" font-medium hidden md:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
          <li>
            <Link href="/">Home</Link>
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
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <label className="btn btn-circle swap swap-rotate md:hidden z-10">
        <input type="checkbox" onClick={() => setCrossBar(!crossBar)} />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

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
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
