import Link from "next/link";
import { useEffect, useState } from "react";
import {
  RiHome2Line,
  RiInformationLine,
  RiBuilding2Line,
  RiArticleLine,
  RiContactsLine,
} from "react-icons/ri";
import logo from "@/assets/images/mythili_realty_logo.png";
import Image from "next/image";

const Header = ({ isHomepage }) => {
  const [crossBar, setCrossBar] = useState(false);
  // const [showBackground, setShowBackground] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 100) {
  //       setShowBackground(true);
  //     } else {
  //       setShowBackground(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className={`navbar  rounded-md sticky h-20 top-0  z-20    
            bg-white text-black border-b`}
    >
      <div className="flex-1">
        <Link className="  flex items-center justify-center pl-6" href="/">
          <Image
            src={logo.src}
            alt="logo"
            height={5}
            width={220}
            className="w-40 lg:w-60"
          />
        </Link>
      </div>

      <div className=" font-medium hidden md:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
          {/* <li>
            <Link href="/">Home</Link>
          </li> */}
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover dropdown-end z-50 ">
              <div tabIndex={0} role="button">
                Properties
              </div>
              <ul className="dropdown-content menu  bg-base-100 rounded-lg text-black top-8 ">
                <li>
                  <Link href="/residential">Residential</Link>
                </li>
                <li>
                  <Link href="/commercial">Commercial</Link>
                </li>

                <li>
                  <Link href="/sco">SCO</Link>
                </li>
                <li>
                  <Link href="/plots">Plots</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
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
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      {crossBar && (
        <div className="flex flex-col items-center absolute top-0 right-0 w-1/2 bg-base-200 h-screen">
          <ul className="h-fit menu menu-vertical px-4 pt-12 text-lg font-semibold text-gray-800 uppercase">
            {/* <li>
              <Link href="/">
                <span className="flex items-center  ">
                  <RiHome2Line className="mr-2" />
                  Home
                </span>
              </Link>
            </li> */}
            <li>
              <Link href="/about-us">
                <span className="flex items-center  ">
                  <RiInformationLine className="mr-2" />
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <details>
                <summary className="flex items-center">
                  <RiBuilding2Line className="mr-2" />
                  Properties
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="/commercial">
                      <span className=" ">Commercial</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/residential">
                      <span className=" ">Residential</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sco">
                      <span className=" ">SCO</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/plots">
                      <span className=" ">Plots</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/blogs">
                <span className="flex items-center  ">
                  <RiArticleLine className="mr-2" />
                  Blogs
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <span className="flex items-center  ">
                  <RiContactsLine className="mr-2" />
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

{
  /* <div
className={`navbar  rounded-md sticky h-20 top-0  z-20    ${
  isHomepage && !showBackground
    ? "bg-transparent text-white"
    : "bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-30  "
} ${!isHomepage && "border-b "}`}
>
<div className="flex-1">
  <Link className="  flex items-center justify-center pl-6" href="/">
    <Image
      src={logo.src}
      alt="logo"
      height={5}
      width={220}
      className="w-40 lg:w-60"
    />
  </Link>
</div> */
}
