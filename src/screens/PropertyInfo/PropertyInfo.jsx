import React from "react";
import Link from "next/link";
import RecentProperty from "@/components/Card/RecentProperty";
import {
  FaVideo,
  FaLocationDot,
  FaHouseChimney,
  FaList,
  FaHouse,
  FaPersonShelter,
} from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";
import { LuIndianRupee } from "react-icons/lu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  A_PLUS_DEVELOPERS,
  REVIEWS,
  SLIDER_SETTINGS_A_PLUS_DEVS,
  SLIDER_SETTINGS_DIFF_PROP,
  SLIDER_SETTINGS_DIFF_PROP_INFO,
  SLIDER_SETTINGS_TESTIMONIAL,
} from "@/constants/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyInfo = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-5 ">
      <div className="flex flex-col w-full max-w-7xl  my-">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/commercial-page">Properties</Link>
            </li>
            <li>
              <a>Details</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row w-full my-8 gap-6 md:gap-0">
          <div className="overflow-hidden w-3/4 p-3">
            <div className="border border-black ">
              <div className="w-full max-w-5xl mt-1 mb-10 flex">
                {/* <Slider {...SLIDER_SETTINGS_DIFF_PROP_INFO}>
                  <div>
                    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG91c2V8ZW58MHx8MHx8fDA%3D" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG91c2V8ZW58MHx8MHx8fDA%3D" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG91c2V8ZW58MHx8MHx8fDA%3D" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG91c2V8ZW58MHx8MHx8fDA%3D" />
                  </div>
                </Slider> */}
              </div>
            </div>
            <div className="py-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border border-t-gray-600 px-4"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaHouse className=" mr-1 " /> Overview
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border border-t-gray-600 px-4"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <BiDetail className="mr-1" />
                      Brochure
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border border-t-gray-600 px-4"
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
                        <p className="py-1 font-semibold tracking-widest">24*7 Security</p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">Elevator</p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">CCTV</p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">Parking Space</p>
                      </div>
                      <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <FaList className="text-3xl text-green-500" />
                        <p className="py-1 font-semibold tracking-widest">Power Backup</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="border border-t-gray-600 px-4"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaVideo className=" mr-2" />
                      Video
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className="border border-t-gray-600 px-4"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaPersonShelter className=" mr-1" /> About the Developer
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  className="border border-t-gray-600 px-4"
                >
                  <AccordionTrigger className="font-bold text-xl">
                    <div className="flex items-center">
                      <FaLocationDot className=" mr-1" /> Location
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883842!2d77.04417347155065!3d28.52725273882469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710325201583!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className="object-cover border border-black"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col w-1/4 bg-base-200 ">
            <div className="flex flex-col p-4 my-2 border">
              <p className=" text-lg font-bold ">M3M Route 65</p>
              <span className="text-sm flex items-center ">
                <FaLocationDot className=" text-green-500" /> Sector 65,
                Gurugram
              </span>
            </div>
            <div className="flex flex-col p-4 my-2 border">
              <p className=" text-lg font-bold flex items-center">
                <LuIndianRupee /> 75 Lakh* Onwards
              </p>
              <span className="text-sm">
                Status: <span className=" font-semibold">New Launch</span>
              </span>
            </div>
            <div className="flex items-center p-4 my-2 border">
              <FaHouseChimney className=" text-2xl  text-green-500" />
              <div className="flex flex-col mx-2">
                <span className=" font-semibold">Project Size</span>
                <span className="text-sm">250 - 1000 Sq. Ft.</span>
              </div>
            </div>
            <div className="flex items-center p-4 my-2 justify-center">
              <button className="py-2 px-4 rounded-md items-center bg-green-500 border-white text-white text-xl font-semibold">
                Contact Builder
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-5xl items-center justify-center mt-10 ">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Explore Similar Properties of Interest
        </h2>
        <p className="text-lg text-gray-500 my-3 px-3 text-center">
          Stay Up-to-Date on New Property Options, Best Investment
          Opportunities, and What&apos;s Coming Next.
        </p>
      </div>
      <div className="w-full max-w-5xl mt-1 mb-10">
        <Slider {...SLIDER_SETTINGS_DIFF_PROP}>
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
        </Slider>
      </div>
    </div>
  );
};

export default PropertyInfo;
