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
      <footer className="footer text-base-content px-10 py-10 flex flex-col md:flex-row max-w-7xl mx-auto">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-3 justify-around gap-6  ">
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
                  Office no.1, Pillar no.148, Sec 103, Main, Northern Peripheral
                  Rd, opp. Hero Homes, Gurugram, Haryana 122006, India
                </a>
              </div>
              <div className="flex items-center gap-2 link link-hover">
                <MdEmail size={14} />
                <a href="mailto:abhi885990@gmail.com">realestate@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 link link-hover">
                <FaPhoneAlt size={14} />
                <a href="tel:98239489">987654321</a>
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
      </footer>
      <footer className="footer footer-center p-3 bg-base-300 text-base-content">
        <aside>
          {/* <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg> */}
          <Image
            src={logo.src}
            alt="logo"
            height={20}
            width={150}
            className=""
          />
          <p className="font-bold">
            Mythili Realty<br />
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className=" hover:cursor-pointer" href="https://x.com/MythiliRealty">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className=" hover:cursor-pointer" href="https://www.youtube.com/channel/UCMubzNX5tcnS7VqWQXW6Gqw">
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
            <a className=" hover:cursor-pointer" href="https://www.instagram.com/mythilirealty/">
              <AiFillInstagram size={26} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
