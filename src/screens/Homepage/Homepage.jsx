import property_1_img from "@/assets/images/property_1.jpg";
import property_2_img from "@/assets/images/property_2.jpg";
import property_3_img from "@/assets/images/property_3.jpg";
import property_4_img from "@/assets/images/property_4.jpg";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Banner from "@/components/Card/Banner";
import Property from "@/components/Card/Property";
import Testimonial from "@/components/Card/Testimonial";
import Header from "@/components/Header/Header";
import Blogcard from "@/components/Card/Blogcard";

import {
  A_PLUS_DEVELOPERS,
  REVIEWS,
  SLIDER_SETTINGS_A_PLUS_DEVS,
  SLIDER_SETTINGS_BANNER,
  SLIDER_SETTINGS_DIFF_PROP,
  SLIDER_SETTINGS_RECENT_PROP,
  SLIDER_SETTINGS_TESTIMONIAL,
  SLIDER_SETTINGS_BLOGS,
} from "@/constants/constants";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaChartArea,
  FaGlobe,
  FaPen,
  FaRegFaceSmileBeam,
} from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { LuTrophy } from "react-icons/lu";
import { TbMessage2Bolt, TbUserHeart } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import Awards from "@/components/Card/Awards";
import { useRouter } from "next/router";

const BANNERS = [
  property_3_img,
  property_1_img,
  property_2_img,
  property_4_img,
];

const Homepage = ({ data }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedTab, setSelectedTab] = useState("residential");
  const [selectedProperty, setSelectedProperty] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState({
    name: "",
    id: "",
    location: "",
    status: {},
  });
  const router = useRouter();
  const [showProperty, setShowProperty] = useState(false);

  const inputRef = useRef(null);

  const newLaunchData = data
    .filter((item) => item.status.value === "new-launch")
    .slice(0, 8);

  useEffect(() => {
    // Filter data based on the selected tab when the selectedTab state changes
    filterProperties();
  }, [selectedTab, data]);

  const filterProperties = () => {
    // Filter data based on the selected tab and limit to first 8 items
    const filteredData = data
      .filter((item) => {
        switch (selectedTab) {
          case "residential":
            return item.type === "residential";
          case "commercial":
            return item.type === "commercial";
          case "sco":
            return item.type === "sco";
          case "plot":
            return item.type === "plot";
          default:
            return true;
        }
      })
      .slice(0, 7);

    // Update selectedProperty state with the filtered data
    setSelectedProperty(filteredData);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setCollapsed(true);
        setInputValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    const { location, name, status, id } = search;
    const query = {};

    if (name) {
      query.property = encodeURIComponent(name);
    }
    if (location) {
      query.location = encodeURIComponent(location); // Encode the location value
    }

    if (status && status.value) {
      query.status = status.value;
    }

    if (id) {
      query.state = id;
    }

    const queryString = new URLSearchParams(query).toString();
    const navigationPath = `/properties?${queryString}`;

    // Navigate to the new page with the constructed query string
    router.push(navigationPath);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const filtered = data.filter((property) =>
        property.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProperties(filtered);
      setSearching(false); // Set searching indicator to false after debounce
    }, 300); // Adjust debounce time as needed (in milliseconds)

    // Cleanup function to clear timeout if component unmounts or inputValue changes
    return () => clearTimeout(debounceTimer);
  }, [inputValue, data]); // Trigger effect when inputValue or properties change

  const handleInputChange = (e) => {
    setShowProperty(true);
    const value = e.target.value;
    setInputValue(value);
    setSearching(true); // Set searching indicator to true while typing
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden  lg:px-0">
      {/* Banner */}

      <div className="top-0 left-0 right-0 z-10 fixed">
        <div className="sm:block text-sm">
          <AnnouncementBar />
        </div>
        <Header isHomepage={true} />
      </div>

      <div className="relative w-full">
        <Slider {...SLIDER_SETTINGS_BANNER}>
          {BANNERS.map((image, index) => {
            return <Banner image={image.src} key={index} />;
          })}
        </Slider>
        <div className="absolute inset-0 flex flex-col justify-center items-center w-full px-4 text-center ">
          <p className=" text-white text-3xl font-bold max-w-3xl ">
            Explore our curated listings today.
          </p>
          <p className=" text-white text-3xl font-bold max-w-3xl mt-2">
            Where Every Door Opens to Possibilities.
          </p>

          <div className="relative gap-0 mt-3 " ref={inputRef}>
            <label className=" input input-bordered flex items-center gap-2">
              <IoLocationOutline />
              <input
                type="text"
                placeholder="Search project..."
                value={inputValue}
                className="w-56 md:w-[33rem]"
                onChange={handleInputChange}
                onFocus={toggleCollapsed}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            {!collapsed && showProperty && inputValue.length > 0 && (
              <div className="z-50 bg-white rounded-lg absolute w-full text-start border ml-5 max-w-lg">
                {searching && (
                  <div className="h-28">
                    <p className="font-normal px-4">Searching...</p>
                  </div>
                )}
                {!searching &&
                  (filteredProperties.length > 0 ? (
                    <ul>
                      {filteredProperties.map((item,index) => (
                        <li key={index}
                          className=" border-b p-2 text-sm cursor-pointer"
                          onClick={() => {
                            setSearch({
                              ...search,
                              name: item.title,
                              id: item.id,
                            });
                            setInputValue(item.title);
                            setShowProperty(false);
                          }}
                        >
                          <p>{item.title}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="h-28">
                      <p className="font-normal px-4">No property found</p>
                    </div>
                  ))}
              </div>
            )}

            <div
              className={`absolute w-full top-full left-0 mt-1 bg-white border-l border-r border-b border-gray-300 rounded-md shadow-md z-10 ${
                collapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }  duration-300 transition-transform ease-in-out flex p-2 gap-2 flex-col`}
            >
              <select
                className="select select-bordered w-full "
                onChange={(e) => {
                  setSearch({ ...search, location: e.target.value });
                }}
              >
                <option disabled selected>
                  Location
                </option>
                <option value="new Delhi">New Delhi</option>
                <option value="gurugram">Gurugram</option>
                <option value="noida">Noida</option>
              </select>{" "}
              <select
                className="select select-bordered w-full"
                onChange={(e) => {
                  setSearch({ ...search, status: JSON.parse(e.target.value) });
                }}
                id="status"
                name="status"
                // value={JSON.stringify(formData.status)} // Ensure the select value is a stringified object
              >
                <option value="">Status</option>
                <option
                  value={JSON.stringify({
                    name: "New Launch",
                    value: "new-launch",
                  })}
                >
                  New Launch
                </option>
                <option
                  value={JSON.stringify({
                    name: "Under Construction",
                    value: "under-construction",
                  })}
                >
                  Under Construction
                </option>
                <option
                  value={JSON.stringify({
                    name: "Ready to Move",
                    value: "ready-to-move",
                  })}
                >
                  Ready To Move
                </option>
              </select>
              <button
                className="btn bg-green-700 text-white uppercase"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3  w-full flex flex-col mx-auto items-center">
        {/* Trusted Partners */}
        <div className="w-full  my-12 flex flex-col gap-3 items-center justify-center border max-w-6xl p-4 rounded-lg">
          <p className="font-bold text-3xl">Trusted Partners</p>
          <p className="text-lg">
            We partner with the finest to ensure your home buying experience is
            second to none. See who stands behind us.
          </p>
          <div className="w-full mt-2 py-4 relative ">
            <Slider
              {...SLIDER_SETTINGS_A_PLUS_DEVS}
              className="flex items-center justify-center  gap-4"
            >
              {A_PLUS_DEVELOPERS.map((developer, index) => (
                <figure key={index}>
                  <img
                    src={developer.src}
                    alt="Shoes"
                    className="h-20 w-24 my-auto "
                  />
                </figure>
              ))}
            </Slider>

            <div className="absolute top-0 left-0 w-10 md:w-32 h-full bg-gradient-to-r from-gray-50 rounded-lg"></div>
            <div className="absolute top-0 right-0 w-10 md:w-32 h-full bg-gradient-to-l from-gray-50 rounded-lg"></div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-6xl items-center mb-10 ">
          <div className="flex items-center gap-4 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
            <h2>Our Latest Launches</h2>
          </div>
          <div className="w-full mt-8">
            <Slider className="gap-3" {...SLIDER_SETTINGS_RECENT_PROP}>
              {newLaunchData.map((data, index) => (
                <Property key={index} data={data} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-6xl items-center justify-center mt-10 ">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What are you looking for?
          </h2>
          <p className="text-lg text-gray-500 my-3 px-3 text-center">
            Stay Up-to-Date on New Property Options, Best Investment
            Opportunities, and What&apos;s Coming Next.
          </p>
          <div role="tablist" className="tabs tabs-boxed tabs-md p-2">
            <a
              role="tab"
              className={`tab ${
                selectedTab === "residential" && "bg-green-800 text-white"
              }`}
              onClick={() => setSelectedTab("residential")}
            >
              RESIDENTIAL
            </a>
            <a
              role="tab"
              className={`tab ${
                selectedTab === "commercial" && "bg-green-800 text-white"
              }`}
              onClick={() => setSelectedTab("commercial")}
            >
              COMMERCIAL
            </a>
            <a
              role="tab"
              className={`tab ${
                selectedTab === "sco" && "bg-green-800 text-white"
              }`}
              onClick={() => setSelectedTab("sco")}
            >
              SCO
            </a>
            <a
              role="tab"
              className={`tab ${
                selectedTab === "plot" && " bg-green-800 text-white"
              }`}
              onClick={() => setSelectedTab("plot")}
            >
              PLOTS
            </a>
          </div>
        </div>
        <div className="w-full max-w-6xl mt-8 mb-10 scroll-smooth">
          <Slider {...SLIDER_SETTINGS_DIFF_PROP}>
            {selectedProperty.map((item, index) => (
              <Property key={index} data={item} />
            ))}
          </Slider>
        </div>

        {/* STATS */}

        <div className="stats  stats-vertical md:stats-horizontal shadow my-12 w-full max-w-6xl border">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <TbUserHeart size={28} color="#006039" />
            </div>

            <div className="stat-value">25000+</div>
            <div className="stat-title">Happy Customers</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaChartArea size={28} color="#006039" />
            </div>

            <div className="stat-value">45 Million</div>
            <div className="stat-title"> Sq.Ft Area Sold</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBuilding size={30} color="#006039" />
            </div>
            <div className="stat-value">150+</div>
            <div className="stat-title">Different Properties</div>
          </div>
        </div>

        {/* AWARDS SECTION */}

        {/* <section className="bg-gray-100 py-16 max-w-6xl rounded-md my-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center gap-4 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
                <h2 className="">Awards & Recognition</h2>
                <LuTrophy />
              </div>
              <p className="mt-4 text-lg text-gray-600">
                We take pride in our accomplishments and the recognition
                we&apos;ve received.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Awards
                imageSrc="/path/to/image1.jpg"
                title="Best Real Estate Agency 2023"
                description="Awarded for our exceptional service and client satisfaction."
              />
              <Awards
                imageSrc="/path/to/image2.jpg"
                title="Top Seller of the Year"
                description="Recognized for our outstanding performance in property sales."
              />
              <Awards
                imageSrc="/path/to/image3.jpg"
                title="Excellence in Customer Service"
                description="Awarded for our commitment to providing top-notch customer service."
              />
            </div>
          </div>
        </section> */}

        {/* Testimonial */}

        <div className="w-full max-w-6xl flex flex-col items-center gap-4 my-8">
          <div className="flex items-center gap-4 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
            <h2>What Our Clients Say</h2>
            <TbMessage2Bolt size={40} className="pt-2" />
          </div>
          <div className="w-full">
            <Slider {...SLIDER_SETTINGS_TESTIMONIAL}>
              {REVIEWS.map((review, index) => (
                <Testimonial review={review} key={index} />
              ))}
            </Slider>
          </div>
        </div>
        {/* BLOGS */}
        <section className="py-4 w-full max-w-6xl rounded-md mt-6 px-4">
          <div className="container mx-auto px-4 ">
            <div className="text-center mb-8">
              <div className="flex items-center gap-3 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
                <h2>Explore Our Latest Blogs</h2>
                {/* <FaPen size={35} className="pt-2" /> */}
              </div>
              <p className="text-lg text-gray-600">
                Stay updated with our insights and tips.
              </p>
            </div>
            <Slider className="" {...SLIDER_SETTINGS_BLOGS}>
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
            </Slider>
            <div className="text-center mt-7">
              <button className="btn btn-ghost text-lg">
                Read more blogs <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Homepage;
