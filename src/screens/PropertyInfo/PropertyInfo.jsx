import Property from "@/components/Card/Property";
import { Link, Element } from "react-scroll";

import {
  SLIDER_SETTINGS_DIFF_PROP,
  SLIDER_SETTINGS_DIFF_PROP_INFO,
  SLIDER_SETTINGS_TESTIMONIAL,
} from "@/constants/constants";
import Linked from "next/link";
import { useState } from "react";
import { BiDetail } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import {
  FaArrowRight,
  FaFilePdf,
  FaHouse,
  FaHouseChimney,
  FaList,
  FaLocationDot,
  FaPersonShelter,
  FaVideo,
} from "react-icons/fa6";
import { IoMailUnreadOutline, IoCloudDownload } from "react-icons/io5";
import { LuIndianRupee } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PropertyInfo = ({ data }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <div className="h-10 w-14 my-2 rounded-md">
          <a>
            <img src={data.images[i]} />
          </a>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeTab, setActiveTab] = useState("overview");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill out all fields");
      return;
    }
    // Send form data
    console.log(formData);
    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-5 ">
      <div className="flex flex-col w-full max-w-7xl my-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Linked href="/">Home</Linked>
            </li>
            <li>Properties</li>
            <li>
              <a>Details</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row w-full my-8 md:my-0 md:space-x-6">
          <div className=" w-full max-w-4xl p-3">
            <div className=" md:hidden w-full px-4 py-4 bg-base-200 rounded-lg relative slide-container ">
              <Slider
                {...SLIDER_SETTINGS_TESTIMONIAL}
                className="w-full h-full flex"
              >
                {data?.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} className="rounded-md h-56 w-full" />
                  </div>
                ))}
              </Slider>
              <div className="mx-auto w-full flex justify-center items-center gap-2 text-gray-400">
                <p className="font-bold">swipe</p>
                <FaArrowRight />
              </div>
            </div>
            <div className="hidden md:block w-full  px-8 pt-5 pb-14 bg-base-300 rounded-lg relative slide-container ">
              <Slider {...settings} className="w-full h-full">
                {data?.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} className="rounded-md h-[33rem] w-full" />
                  </div>
                ))}
              </Slider>
            </div>

            {/* All property details section*/}
            <div className="my-4 p-2">
              <div
                role="tablist"
                className="navbar sticky top-0 z-10 tabs tabs-bordered overflow-x-scroll lg:overflow-x-auto"
              >
                <Link
                  role="tab"
                  className={`tab ${
                    activeTab == "overview" ? "tab-active" : ""
                  }`}
                  to="overview"
                  smooth={true}
                  duration={500}
                  onClick={() => handleTabClick("overview")}
                >
                  Overview
                </Link>
                <Link
                  role="tab"
                  className={`tab ${
                    activeTab == "brochure" ? "tab-active" : ""
                  }`}
                  to="brochure"
                  smooth={true}
                  duration={500}
                  onClick={() => handleTabClick("brochure")}
                >
                  Brochure
                </Link>
                <Link
                  role="tab"
                  className={`tab ${
                    activeTab == "amenities" ? "tab-active" : ""
                  }`}
                  to="amenities"
                  smooth={true}
                  duration={500}
                  onClick={() => handleTabClick("amenities")}
                >
                  Amenities
                </Link>
                <Link
                  role="tab"
                  className={`tab ${activeTab == "video" ? "tab-active" : ""}`}
                  to="video"
                  smooth={true}
                  duration={500}
                  onClick={() => handleTabClick("video")}
                >
                  Video
                </Link>
                <Link
                  role="tab"
                  className={`tab ${
                    activeTab == "developer" ? "tab-active" : ""
                  }`}
                  to="developer"
                  smooth={true}
                  duration={500}
                  onClick={() => handleTabClick("developer")}
                >
                  Developer
                </Link>
                <Link
                  role="tab"
                  className={`tab ${
                    activeTab == "location" ? "tab-active" : ""
                  }`}
                  to="location"
                  smooth={true}
                  duration={500}
                  onClick={() => handleTabClick("location")}
                >
                  Location
                </Link>
              </div>

              <Element name="overview" className="my-3">
                <div className="bg-gray-100 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center">
                    <FaHouse className="mr-2 text-green-500" size={20} />
                    <h2 className="font-bold text-xl">Overview</h2>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-xl mt-2">
                    <div 
                    className="px-4"
                    dangerouslySetInnerHTML={{ __html: data.htmlDescription }}
                    ></div>
                  </div>
                </div>
              </Element>

              <Element name="brochure" className="my-3">
                <div className="bg-gray-100 rounded-xl p-4  shadow-lg">
                  <div className="flex items-center">
                    <BiDetail className="mr-2 text-green-500" size={20} />
                    <h2 className="font-bold text-xl">Brochure</h2>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-xl mt-2 flex items-center justify-center">
                    <a
                      href={data.brochure}
                      target="_blank"
                      className="text-lg font-bold link link-hover italic flex items-center gap-2"
                    >
                      <IoCloudDownload color="red" /> Download brochure
                    </a>
                  </div>
                </div>
              </Element>

              <Element name="amenities" className="my-3">
                <div className="bg-gray-100 rounded-xl p-4  shadow-lg">
                  <div className="flex items-center">
                    <FaList className="mr-2 text-green-500" size={20} />
                    <h2 className="font-bold text-xl">Amenities</h2>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-xl mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6 lg:gap-y-8">
                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                      <FaList className="text-3xl text-green-500" />
                      <p className="py-1 font-semibold tracking-widest">
                        24*7 Security
                      </p>
                    </div>
                    {/* Add more amenities here */}
                  </div>
                </div>
              </Element>

              <Element name="video" className="my-3">
                <div className="bg-gray-100 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center">
                    <FaVideo className="mr-2 text-green-500" size={20} />
                    <h2 className="font-bold text-xl">Video</h2>
                  </div>
                  {data.video ? (
                    <div className="p-6 bg-white border border-gray-200 rounded-xl mt-2 flex items-center justify-center">
                      <video width="550" height="350" controls preload="none">
                        <source src={data.video} type="video/mp4" />
                        <track
                          src="/path/to/captions.vtt"
                          kind="subtitles"
                          srcLang="en"
                          label="English"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <p className="p-4 bg-white border border-gray-200 rounded-xl mt-2">
                      Video not available
                    </p>
                  )}
                </div>
              </Element>

              <Element name="developer" className="my-3">
                <div className="bg-gray-100 rounded-xl p-4  shadow-lg">
                  <div className="flex items-center">
                    <FaPersonShelter
                      className="mr-2 text-green-500"
                      size={20}
                    />
                    <h2 className="font-bold text-xl">About the Developer</h2>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-xl mt-2">
                    {data.developerInfo}
                  </div>
                </div>
              </Element>

              <Element name="location" className="my-3">
                <div className="bg-gray-100 rounded-xl p-4  shadow-lg">
                  <div className="flex items-center">
                    <FaLocationDot className="mr-2 text-green-500" size={20} />
                    <h2 className="font-bold text-xl">Location</h2>
                  </div>
                  <div
                    className="p-4 bg-white border border-gray-200 rounded-xl mt-2 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: data.googleMapLink }}
                  />
                </div>
              </Element>
            </div>
          </div>

          {/* Sidebar for property basic details */}
          <div className="flex flex-col w-full lg:w-1/4 mt-4 mx-auto overflow-hidden">
            <div className="rounded-md p-4 ">
              <div className="flex flex-col px-3 my-2">
                <p className=" text-lg font-bold mb-1">M3M Towers</p>
                <span className="text-sm flex items-center ">
                  <FaLocationDot size={15} className=" mr-2" />{" "}
                  <span>{data.location}</span>
                </span>
              </div>
              <div className="flex items-center p-3 my-3 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="m-2">
                  <LuIndianRupee size={30} className=" mr-1" />
                </div>
                <div className="flex flex-col mx-2">
                  <span className="font-bold text-xl text-gray-800">
                    {data.price} Ownwards
                  </span>
                  <div className="text-sm text-gray-700">
                    <span
                      className={`border rounded-xl px-1 ${
                        data.status === "Under Construction"
                          ? "border-orange-200 bg-orange-300"
                          : data.status === "New Launch"
                          ? "border-blue-200 bg-blue-300"
                          : "border-green-200 bg-green-300"
                      }`}
                    >
                      {data.status}
                    </span>
                    {/* <span className="border border-orange-200 bg-orange-300 rounded-xl px-1">
                      Under Contruction
                    </span>
                    <span className="border border-green-200 bg-green-300 rounded-xl px-1">
                      Ready to move
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="flex items-center p-3 my-2 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="m-2">
                  <BsHouse className="text-xl" size={30} />
                </div>
                <div className="flex flex-col mx-2">
                  <span className="font-bold text-xl text-gray-800">
                    Project Size
                  </span>
                  <span className="text-lg text-gray-700">{data.size}</span>
                </div>
              </div>
            </div>

            {/* contact us form */}
            <div className="flex flex-col p-4 w-full items-center bg-base-200 mt-10 rounded-md md:sticky md:top-20">
              <p className="font-bold text-xl mb-3 flex items-center gap-3">
                Contact an Expert <IoMailUnreadOutline size={24} />
              </p>
              <form
                className="w-full flex flex-col items-center gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your phone number"
                  required
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="whatsappNotification"
                    name="whatsappNotification"
                    checked={formData.whatsappNotification}
                    // onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="whatsappNotification" className="text-sm">
                    Receive WhatsApp notification
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn bg-green-800 hover:bg-green-700 text-white text-lg w-full uppercase"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-5xl items-center justify-center mt-10 mb-8">
        <h2 className="text-xl text-center font-bold text-gray-900 sm:text-4xl mb-4">
          Similar Properties
        </h2>
        <div className="w-full">
          <Slider {...SLIDER_SETTINGS_DIFF_PROP}>
            <Property />
            <Property />
            <Property />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
