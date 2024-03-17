import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <footer className="footer p-10  text-base-content px-10 justify-between  bg-gray-200 flex flex-col md:flex-row">
        <div className="flex justify-around w-full">
          <nav>
            <h6 className="footer-title">Company Name with logo</h6>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <FaLocationDot size={14} />
                <a
                  className="w-40"
                  href="https://www.google.com/maps/place/Delhi/@28.6436846,76.7635744,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu"
                  target="_blank"
                >
                  3rd and 7th Floor, Golf View Corporate Tower Golf Course Road,
                  Sector 42, Gurgaon-122002
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail size={14} />
                <a href="mailto:abhi885990@gmail.com">realestate@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={14} />
                <a href="tel:98239489">987654321</a>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe size={14} />
                <a href="google.com" target="_blank">
                  www.google.com
                </a>
              </div>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
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

              <Link href="/blogs" className="link-hover">
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
              <Link href="/terms-and-conditions" className="link-hover">
                Terms of use
              </Link>
              <Link href="/privacy-policy" className="link-hover">
                Privacy Policy
              </Link>
              <Link href="/copyright-policy" className="link-hover">
                Copyright Policy
              </Link>
            </div>
          </nav>
        </div>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
