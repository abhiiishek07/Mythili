import property_1_img from "@/assets/images/property_1.jpg";
import property_2_img from "@/assets/images/property_2.jpg";
import property_3_img from "@/assets/images/property_3.jpg";
import property_4_img from "@/assets/images/property_4.jpg";
import Property from "@/components/Card/Property";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SLIDER_SETTINGS_DIFF_PROP,
  SLIDER_SETTINGS_DIFF_PROP_INFO,
  SLIDER_SETTINGS_TESTIMONIAL,
} from "@/constants/constants";
import Link from "next/link";
import { useState } from "react";
import { BiDetail } from "react-icons/bi";
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
import { IoMailUnreadOutline } from "react-icons/io5";
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
              <Link href="/">Home</Link>
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

            <div className="py-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border border-gray-600 px-4 rounded-xl my-1"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaHouse className=" mr-1 " /> Overview
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{data.details}</AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border border-gray-600 px-4 rounded-xl my-1"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <BiDetail className="mr-1" />
                      Brochure
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="w-full ">
                      <a
                        href={data.brochure}
                        target="_blank"
                        className="text-lg font-bold link link-hover italic flex items-center gap-2"
                      >
                        <FaFilePdf color="red" /> View brochure
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border border-gray-600 px-4 rounded-xl my-1"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaList className="mr-1" /> Ammenities
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6 lg:gap-y-8">
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">
                          24*7 Security
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">
                          Elevator
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">
                          CCTV
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">
                          Parking Space
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">
                          Power Backup
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="border border-gray-600 px-4 rounded-xl my-1"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaVideo className=" mr-2" />
                      Video
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {data.video ? (
                      <div className="flex items-center justify-center">
                        <video width="520" height="340" controls preload="none">
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
                      <p>Video not available</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className="border border-gray-600 px-4 rounded-xl my-1"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaPersonShelter className=" mr-1" /> About the Developer
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{data.developerInfo}</AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  className="border border-gray-600 px-4 rounded-xl my-1"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaLocationDot className=" mr-1" /> Location
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center justify-center">
                      <div
                        dangerouslySetInnerHTML={{ __html: data.googleMapLink }}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/4 mt-4 mx-auto overflow-hidden">
            <div className="bg-base-200 rounded-md p-4 ">
              <div className="flex flex-col px-3  my-2 ">
                <p className=" text-lg font-bold ">{data.location}</p>
                <span className="text-sm flex items-center ">
                  <FaLocationDot /> Sector 65, Gurugram
                </span>
              </div>
              <div className="flex flex-col p-3 my-2 ">
                <p className=" text-lg font-bold flex items-center">
                  <LuIndianRupee size={20} /> {data.price}
                </p>
                <span className="text-sm">
                  Status: <span className=" font-semibold">New Launch</span>
                </span>
              </div>
              <div className="flex items-center p-3  my-2 ">
                <FaHouseChimney className=" text-xl  " />
                <div className="flex flex-col mx-2">
                  <span className=" font-semibold">Project Size</span>
                  <span className="text-sm">{data.size}</span>
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
