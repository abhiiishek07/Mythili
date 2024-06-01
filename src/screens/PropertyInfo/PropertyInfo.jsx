import Property from "@/components/Card/Property";
import ContactUsModal from "@/components/ContactUsModal/ContactUsModal";
import { Element, Link } from "react-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AMENITIES,
  SLIDER_SETTINGS_DIFF_PROP,
  SLIDER_SETTINGS_TESTIMONIAL,
} from "@/constants/constants";
import Linked from "next/link";
import React, { useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import {
  FaArrowRight,
  FaHouse,
  FaList,
  FaLocationDot,
  FaPersonShelter,
  FaVideo,
} from "react-icons/fa6";
import { IoCloudDownload, IoMailUnreadOutline } from "react-icons/io5";
import { LuIndianRupee } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import toast from "react-hot-toast";
import Image from "next/image";
import axios from "axios";

const PropertyInfo = ({ data, similarProperties }) => {
  const [openContactus, setOpenContactUs] = useState(false);
  const [forBrochure, setForBrochure] = useState(true);
  const [loading, setLoading] = useState(false);
  const [mapEmbedLink, setMapEmbedLink] = useState("");

  useEffect(() => {
    // Assuming data contains the Google Maps embed link
    if (data && data.googleMapLink) {
      // Modify the width and height of the embed link
      const modifiedMapLink = data.googleMapLink
        .replace(
          /width="\d+"/,
          'width="800"' // Update width as needed
        )
        .replace(
          /height="\d+"/,
          'height="400"' // Update height as needed
        );

      // Set the modified embed link
      setMapEmbedLink(modifiedMapLink);
    }
  }, [data]);

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
    whatsappPermission: "no",
  });

  const handleBrochureDownload = (e) => {
    setOpenContactUs(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlewhatsapp = (e) => {
    const { checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        whatsappPermission: "Yes",
      });
    } else {
      setFormData({
        ...formData,
        whatsappPermission: "No",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === ""
    ) {
      toast.error("Please fill all the required feild");
      return;
    }

    setLoading(true);

    const contact_expert_data = {
      ...formData,
      propertyName: data.name,
      propertyId: data.id,
      time: new Date().toDateString().toString(),
    };

    const res = await axios.post("/api/contact-expert", {
      contact_expert_data,
    });

    if (res.status === 200) {
      toast.success("An Expert will contact you shortly!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsappPermission: "No",
      });
    } else {
      toast.error("Something went wrong. Please try again");
    }

    setLoading(false);
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
              {data.images.length === 1 ? (
                <Image
                  src={data.images[0]}
                  alt="banner"
                  height={700}
                  width={500}
                />
              ) : (
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
              )}
              <div className="mx-auto w-full flex justify-center items-center gap-2 text-gray-400">
                <p className="font-bold">swipe</p>
                <FaArrowRight />
              </div>
            </div>

            {data.images.length === 1 ? (
              <div className="hidden md:block w-full  p-5 bg-base-300 rounded-lg ">
                <Image
                  src={data.images[0]}
                  alt="banner"
                  height={600}
                  width={600}
                  className="object-fill w-full"
                />
              </div>
            ) : (
              <div className="hidden md:block w-full  px-8 pt-5 pb-14 bg-base-300 rounded-lg relative slide-container ">
                <Slider {...settings} className="w-full h-full">
                  {data?.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        className="rounded-md h-[33rem] w-full"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            <div className=" lg:hidden my-4">
              <div className="rounded-md ">
                <div className="flex flex-col px-3 my-2">
                  <p className=" text-2xl font-bold mb-1 text-center">{data.title}</p>
                  <span className="text-sm flex items-center">
                    <FaLocationDot size={15} className=" mr-2" />{" "}
                    <span>{data.address}</span>
                  </span>
                </div>
                <div className="divider"></div>
                <div className="flex items-center p-3 my-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-xl transition duration-300">
                  <div className="m-2">
                    <LuIndianRupee size={30} className=" mr-1" />
                  </div>
                  <div className="flex flex-col mx-2 gap-1">
                    <span className="font-bold text-xl text-gray-800">
                      {data.price} Ownwards
                    </span>
                    <div
                      className={`text-xs text-gray-700 border rounded-lg px-2 py-1 w-fit ${
                        data.status === "Under Construction"
                          ? "border-orange-200 bg-orange-300"
                          : data.status === "New Launch"
                          ? "border-blue-200 bg-blue-300"
                          : "border-green-200 bg-green-300"
                      }`}
                    >
                      {data.status.name}
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-3 my-2 border border-gray-300 rounded-xl shadow-sm hover:shadow-xl transition duration-300">
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
                  <div className="p-2 lg:p-4 bg-white border border-gray-200 rounded-xl mt-2">
                    <div
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
                      onClick={handleBrochureDownload}
                      className="text-lg font-bold link link-hover italic flex items-center gap-2"
                    >
                      <IoCloudDownload color="green" /> Download brochure
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
                  <div className="p-4 bg-white border border-gray-200 rounded-xl mt-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6 lg:gap-y-8">
                    {data.amenities.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-3 md:p-3 lg:p-4 gap-3 border border-green-600"
                        >
                          {React.createElement(AMENITIES[item].icon, {
                            className: "text-4xl text-green-800",
                          })}
                          <p className=" font-semibold tracking-widest text-xs lg:text-md break-words text-center">
                            {AMENITIES[item].name}
                          </p>
                        </div>
                      );
                    })}
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
                    <p className="p-4 bg-white border border-gray-200 rounded-xl mt-2 italic text-gray-500">
                      Video not available for this property.
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
                    className="p-2 w-full bg-white border border-gray-200  rounded-xl mt-2 flex items-center justify-center overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: mapEmbedLink }}
                  />
                </div>
              </Element>
            </div>
          </div>

          {/* Sidebar for property basic details */}
          <div className="flex flex-col w-full lg:w-1/4 mt-4 mx-auto  min-h-screen">
            <div className="hidden rounded-md lg:flex flex-col">
              <div className="flex flex-col px-3 my-2">
                <p className=" text-2xl font-bold mb-1">{data.title}</p>
                <span className="text-sm flex items-center ">
                  <FaLocationDot size={15} className=" mr-2" />{" "}
                  <span>{data.address}</span>
                </span>
              </div>
              <div className="divider"></div>
              <div className="flex items-center p-3 my-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-xl transition duration-300">
                <div className="m-2">
                  <LuIndianRupee size={30} className=" mr-1" />
                </div>
                <div className="flex flex-col mx-2 gap-1">
                  <span className="font-bold text-xl text-gray-800">
                    {data.price} Ownwards
                  </span>
                  <div
                    className={`text-xs text-gray-700 border rounded-lg px-2 py-1 w-fit ${
                      data.status === "Under Construction"
                        ? "border-orange-200 bg-orange-300"
                        : data.status === "New Launch"
                        ? "border-blue-200 bg-blue-300"
                        : "border-green-200 bg-green-300"
                    }`}
                  >
                    {data.status.name}
                  </div>
                </div>
              </div>
              <div className="flex items-center p-3 my-2 border border-gray-300 rounded-xl shadow-sm hover:shadow-xl transition duration-300">
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
                  type="number"
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
                    checked={
                      formData.whatsappPermission === "Yes" ? true : false
                    }
                    onChange={handlewhatsapp}
                    className="mr-2 bg-white checkbox"
                  />
                  <label htmlFor="whatsappNotification" className="text-sm">
                    Receive Whatsapp Notification
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn bg-green-800 hover:bg-green-700 text-white text-lg w-full uppercase"
                >
                  {loading && (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="flex flex-col w-full max-w-6xl gap-3 my-12">
          <p className="font-bold text-3xl">FAQs</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border border-gray-300 bg-base-200 px-4 rounded-xl my-1"
            >
              <AccordionTrigger className="font-bold text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                velit.
              </AccordionTrigger>
              <AccordionContent className=" text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                cum odio quo delectus fuga iure earum rerum quia illum, facilis,
                nulla hic magni reprehenderit aliquid.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border border-gray-300 bg-base-200 px-4 rounded-xl my-1"
            >
              <AccordionTrigger className="font-bold text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                velit.
              </AccordionTrigger>
              <AccordionContent className=" text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                cum odio quo delectus fuga iure earum rerum quia illum, facilis,
                nulla hic magni reprehenderit aliquid.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border border-gray-300 bg-base-200 px-4 rounded-xl my-1"
            >
              <AccordionTrigger className="font-bold text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                velit.
              </AccordionTrigger>
              <AccordionContent className=" text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                cum odio quo delectus fuga iure earum rerum quia illum, facilis,
                nulla hic magni reprehenderit aliquid.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      {similarProperties.length > 2 && (
        <div className="flex flex-col w-full max-w-7xl items-center justify-center mt-10 mb-8">
          <h2 className="text-xl text-center font-bold text-gray-900 sm:text-4xl mb-4">
            Similar Properties
          </h2>
          <div className="w-full mt-2">
            <Slider className="gap-3" {...SLIDER_SETTINGS_DIFF_PROP}>
              {similarProperties.map((item, index) => {
                return item.id !== data.id ? (
                  <Property key={index} data={item} />
                ) : null;
              })}
            </Slider>
          </div>
        </div>
      )}
      <div>
        <ContactUsModal
          forBrochure={forBrochure}
          setForBrochure={data.brochure}
          openContactUs={openContactus}
          setOpenContactUs={setOpenContactUs}
          propertyData={data}
        />
      </div>
    </div>
  );
};

export default PropertyInfo;
