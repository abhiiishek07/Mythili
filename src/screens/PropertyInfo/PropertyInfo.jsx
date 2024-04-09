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

const PROPERTY_IMAGES = [
  property_1_img,
  property_2_img,
  property_3_img,
  property_4_img,
];

const settings = {
  customPaging: function (i) {
    return (
      <div className="h-10 w-14 my-2 rounded-md">
        <a>
          <img src={PROPERTY_IMAGES[i].src} />
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

const PropertyInfo = () => {
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

        <div className="flex flex-col md:flex-row w-full my-8 md:my-0 md:space-x-6">
          <div className=" w-full max-w-4xl p-3">
            <div className=" md:hidden w-full px-4 py-4 bg-base-200 rounded-lg relative slide-container ">
              <Slider
                {...SLIDER_SETTINGS_TESTIMONIAL}
                className="w-full h-full"
              >
                {PROPERTY_IMAGES?.map((image, index) => (
                  <div key={index}>
                    <img src={image?.src} className="rounded-md h-56 w-full" />
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
                {PROPERTY_IMAGES?.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image?.src}
                      className="rounded-md h-[33rem] w-full"
                    />
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
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus similique itaque consequatur provident voluptates eaque harum mollitia veritatis eligendi libero neque laborum iusto, ullam esse. Natus voluptate tenetur beatae modi, doloremque iure explicabo praesentium quis illo laudantium id aliquid deserunt excepturi atque ex, corporis enim iste aut consequuntur repudiandae recusandae blanditiis nemo! Assumenda repudiandae dolore commodi voluptas alias labore sunt vitae expedita velit eius, asperiores eos distinctio natus consectetur vel, ea eum enim ipsam esse repellendus? Temporibus reiciendis, autem recusandae, cumque et debitis nostrum maxime ipsa eaque laborum in nobis ea nisi provident necessitatibus. Repellendus, quia! Enim culpa placeat veritatis incidunt vel minima cupiditate repellendus tempora nostrum, inventore voluptas accusantium voluptates maiores libero commodi pariatur sapiente? Atque temporibus doloremque earum error excepturi eius voluptatibus est itaque, quod tenetur magni nisi ipsum reiciendis. Quam nostrum asperiores quas consectetur expedita non autem dicta atque illum repellat eaque, iste adipisci minima laboriosam ratione nisi? Mollitia eos nihil blanditiis iusto debitis temporibus! Consectetur veniam delectus nemo nesciunt? Error, ea voluptatum atque repudiandae sunt ipsam distinctio non neque nisi nihil animi omnis quasi repellat asperiores tempore exercitationem nobis excepturi molestias temporibus fuga eius voluptate. Error quia debitis iure autem aliquam inventore magni exercitationem mollitia?
                  </AccordionContent>
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
                    Yes. It adheres to the WAI-ARIA design pattern.
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
                    Yes. It adheres to the WAI-ARIA design pattern.
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
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur ipsam explicabo fugit dolores laudantium sequi cum, enim aliquid, exercitationem placeat. In iste ullam alias sed, soluta corporis modi magni delectus explicabo, aut vero dignissimos. Beatae et perferendis soluta aspernatur. Non minima, rerum odio porro earum labore libero vitae corporis, ea autem perspiciatis tempore harum est. Pariatur magni dolor corporis aperiam debitis iusto quibusdam laudantium dolorum delectus rerum consequuntur nobis maxime aliquam nulla quas necessitatibus natus eum molestiae deserunt veniam, porro ratione provident doloremque. Veniam aperiam officiis quod enim, dignissimos odio culpa sequi quibusdam placeat, tenetur minus beatae, provident quidem!
                  </AccordionContent>
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

          <div className="flex flex-col w-full md:w-1/4 mt-4 ">
            <div className="bg-base-200 rounded-md p-4 ">
              <div className="flex flex-col px-3  my-2 ">
                <p className=" text-lg font-bold ">M3M Route 65</p>
                <span className="text-sm flex items-center ">
                  <FaLocationDot /> Sector 65, Gurugram
                </span>
              </div>
              <div className="flex flex-col p-3 my-2 ">
                <p className=" text-lg font-bold flex items-center">
                  <LuIndianRupee size={20} /> 75 Lakh* Onwards
                </p>
                <span className="text-sm">
                  Status: <span className=" font-semibold">New Launch</span>
                </span>
              </div>
              <div className="flex items-center p-3  my-2 ">
                <FaHouseChimney className=" text-xl  " />
                <div className="flex flex-col mx-2">
                  <span className=" font-semibold">Project Size</span>
                  <span className="text-sm">250 - 1000 Sq. Ft.</span>
                </div>
              </div>
            </div>

            {/* contact us form */}
            <div className="flex flex-col p-4 w-full items-center bg-base-200 mt-10 rounded-md md:sticky md:top-20">
              <p className="font-bold text-xl mb-3 flex items-center gap-3">
                Contact Us <IoMailUnreadOutline size={24} />
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

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="btn btn-success text-white text-lg w-full"
                >
                  Contact Now
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
