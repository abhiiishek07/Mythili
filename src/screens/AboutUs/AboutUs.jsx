import Testimonial from "@/components/Card/Testimonial";
import Link from "next/link";
import {
  FaChartArea,
  FaGlobe,
  FaPeopleGroup,
  FaRegFaceSmileBeam,
} from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { TbMessage2Bolt } from "react-icons/tb";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen flex justify-center px-3">
      <div className="flex flex-col w-full max-w-6xl">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2 mt-3">
          <p> About Us </p>
          <FaPeopleGroup />
        </div>
        <div className="w-full rounded-lg">
          <img
            src="https://prateekgroup.com/assets/img/overview-banner1.jpg"
            alt="contact us"
            className="rounded-md object-cover"
          />
        </div>
        <div className="mt-11 flex flex-col">
          <p className="text-3xl font-bold">
            WE HELP YOU BUY, OCCUPY & INVEST IN REAL ESTATE ASSETS.
          </p>
          <p className="text-lg mt-4 text-balance">
            With an absolutely integrated and robust Real Estate platform, we
            started our journey of addressing the realty needs of Gurugram
            commercial and residential segment in 2012. We have a core vision to
            deliver the best and most viable investment opportunities PAN India.
            As the name suggests, we are dedicated to providing exclusive and
            superior services in terms of proficiency and quality. Since our
            inception, we have been serving the objective of elevating our
            customers monetary well-being. To date, we have sold an area of
            about 45 million sq. ft. with more than 25,000 happy and regular
            customers. From best deals to effortless transactions and property
            management, our experienced team of consultants and market experts
            provide you most profitable deals, data-backed solutions, and
            full-fledged post-sales services.
          </p>
          {/* <Editor /> */}
        </div>
        <p className="text-3xl font-bold mt-10">Why Choose us ?</p>
        <div className="stats  stats-vertical md:stats-horizontal shadow my-7 w-full max-w-6xl border">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaRegFaceSmileBeam size={28} />
            </div>

            <div className="stat-value">25000+</div>
            <div className="stat-title">Happy Customers</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaChartArea size={28} />
            </div>

            <div className="stat-value">45 Million</div>
            <div className="stat-title"> Sq.Ft Area Sold</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <RiTeamFill size={28} />
            </div>
            <div className="stat-value">500+</div>
            <div className="stat-title"> Skilled Professionals</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaGlobe size={28} />
            </div>
            <div className="stat-value">750+</div>
            <div className="stat-title"> Channel Associates</div>
          </div>
        </div>
        <div className="w-full max-w-6xl flex flex-col items-center gap-4 my-8">
          <div className="flex items-center gap-4 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
            <h2>What Our Client Say</h2>
            <TbMessage2Bolt size={40} className="pt-2" />
          </div>
          <div className="w-full">
            <Testimonial
              review={{
                text: "I recently bought a beautiful house through this agency. The entire process was smooth and efficient. Highly recommended!",
                author: "Samantha Johnson",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
