import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import logo from "@/assets/images/mythili_realty_logo.png";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [emailId, setEmailId] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await axios.post("/api/addUserToSubscribers", {
      emailId,
    });
    if (res.status === 200) {
      toast.success("Thank you for subscribing to our newsletter");
    }
    setEmailId("");
    setSubmitting(false);
  };
  return (
    <div className="flex flex-col  bg-base-200 ">
      <footer className="footer text-base-content px-10 py-10 flex flex-col max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-5 w-full border-t border-gray-400 border-b py-3">
          <div className="flex">
            <p>LOGO</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h6 className="footer-title mt-4 lg:mt-0">Call</h6>
            <p className="font-semibold">+91 8192074256</p>
          </div>
        </div>
        <div className="flex">
          <div className=" w-full grid grid-cols-1 lg:grid-cols-3 justify-around gap-6">
            <nav>
              <h6 className="footer-title">Contact</h6>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <FaLocationDot size={14} />
                  <a
                    className="w-40 link link-hover"
                    href="https://www.google.com/maps/place/Delhi/@28.6436846,76.7635744,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu"
                    target="_blank"
                  >
                    Office no.1, Pillar no.148, Sec 103, Main, Northern
                    Peripheral Rd, opp. Hero Homes, Gurugram, Haryana 122006,
                    India
                  </a>
                </div>
                <div className="flex items-center gap-2 link link-hover">
                  <MdEmail size={14} />
                  <a href="mailto:marketing.mythilirealty@gmail.com">
                    marketing.mythilirealty@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 link link-hover">
                  <FaPhoneAlt size={14} />
                  <a href="tel:8826638919">8826638919</a>
                </div>
                <div className="flex items-center gap-2 link link-hover">
                  <FaGlobe size={14} />
                  <a href="google.com" target="_blank">
                    www.google.com
                  </a>
                </div>
              </div>
            </nav>
            <nav>
              <h6 className="footer-title mt-4 lg:mt-0">Company</h6>
              <div className="flex flex-col">
                <Link href="/" className="link-hover">
                  Home
                </Link>

                <Link href="/about-us" className="link-hover">
                  About us
                </Link>

                <Link href="/commercial" className="link-hover">
                  Commercial
                </Link>

                <Link href="/residential" className="link-hover">
                  Residential
                </Link>

                <Link href="/sco" className="link-hover">
                  SCO
                </Link>

                <Link href="/plots" className="link-hover">
                  Plots
                </Link>

                <Link href="/blog" className="link-hover">
                  Blogs
                </Link>

                <Link href="/contact-us" className="link-hover">
                  Contact Us
                </Link>
              </div>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <div className="flex flex-col">
                <Link href="/privacy-policy" className="link-hover">
                  Privacy Policy
                </Link>
                <Link href="/copyright-policy" className="link-hover">
                  Copyright Policy
                </Link>
              </div>
            </nav>
          </div>
          <form onSubmit={handleSubmit}>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control ">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="flex flex-col gap-3  lg:hidden">
                <input
                  onChange={(e) => setEmailId(e.target.value)}
                  type="email"
                  value={emailId}
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button
                  type="submit"
                  className="btn bg-green-800 hover:bg-green-700 join-item text-white uppercase"
                >
                  {submitting && (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                  Subscribe
                </button>
              </div>
              <div className="join hidden lg:flex">
                <input
                  onChange={(e) => setEmailId(e.target.value)}
                  type="email"
                  value={emailId}
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button
                  type="submit"
                  className="btn bg-green-800 hover:bg-green-700 join-item text-white uppercase"
                >
                  {submitting && (
                    <span className="loading loading-spinner loading-md"></span>
                  )}
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
      <footer className="footer flex justify-around items-center p-4 bg-neutral text-neutral-content">
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            className=" hover:cursor-pointer"
            href="https://x.com/MythiliRealty"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            className=" hover:cursor-pointer"
            href="https://www.youtube.com/channel/UCMubzNX5tcnS7VqWQXW6Gqw"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a className=" hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a
            className=" hover:cursor-pointer"
            href="https://www.instagram.com/mythilirealty/"
          >
            <AiFillInstagram size={26} />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
