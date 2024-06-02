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
    <div>
      {/* BANNNER */}
      <div className="w-full bg-banner_aboutUs">
        <div className="w-full h-full bg-black bg-opacity-60 flex items-center">
          <div className="container pl-4 lg:pl-28">
            <h1 className="mt-2 text-2xl font-bold  lg:text-4xl  text-white">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl w-full mx-auto my-6 px-3">
        {/* BREADCRUMBS */}
        <div className="text-sm breadcrumbs font-bold">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="text-green-600 font-bold">About Us</li>
          </ul>
        </div>
        <div className=" mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4 flex justify-center">
            About Mythili Realty
          </h1>

          <h2 className="text-xl font-bold mb-2">
            Your Trusted Guide in the Indian Real Estate Market
          </h2>
          <p className="mb-4">
            At Mythili Realty, we&apos;ve been navigating the ever-changing
            landscape of Indian real estate for over 16 years. We understand
            that buying or selling property is an important decision, and
            we&apos;ve here to guide you through the process with experience and
            expertise.
          </p>

          <h2 className="text-xl font-bold mb-2">Why Choose Mythili Realty?</h2>
          <p className="mb-4">
            <strong>Local Market Expertise:</strong> We have a deep
            understanding of the local market dynamics, including current
            trends, property values, and upcoming developments. This allows us
            to provide you with informed advice and strategic recommendations.
          </p>
          <p className="mb-4">
            <strong>Personalized Service:</strong> We believe in building strong
            relationships with our clients. We take the time to understand your
            specific needs, preferences, and budget.
          </p>
          <p className="mb-4">
            <strong>Proven Track Record:</strong> Over the years, we&apos;ve
            helped countless clients successfully navigate the real estate
            market. Our commitment to transparency and integrity has resulted in
            a strong reputation for delivering results.
          </p>
          <p className="mb-4">
            <strong>Seamless Transactions:</strong> We handle all the complex
            paperwork and negotiations, ensuring a smooth and stress-free
            experience for you.
          </p>

          <h2 className="text-xl font-bold mb-2">Our Approach</h2>
          <p className="mb-4">
            At Mythili Realty, we go beyond simply buying or selling property.
            We focus on building long-term relationships with our clients.
            Here&apos;s what you can expect when you partner with us:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Clear Communication:</strong> We keep you informed
              throughout the entire process, ensuring you understand every step
              of the way.
            </li>
            <li>
              <strong>Proactive Negotiation:</strong> We are skilled negotiators
              who will fight for your best interests, whether you&apos;re buying
              or selling.
            </li>
            <li>
              <strong>Market Insights:</strong> We leverage our market knowledge
              to identify the best opportunities and help you make informed
              decisions.
            </li>
            <li>
              <strong>Dedicated Support:</strong> We are available to answer
              your questions and address your concerns every step of the way.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-4">
            If you&apos;re looking for a reliable and experienced real estate
            consultant in India, look no further than Mythili Realty. Contact us
            today for a free consultation and let us help you achieve your real
            estate goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
