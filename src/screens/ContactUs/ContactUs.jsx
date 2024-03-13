import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe, FaLocationDot, FaPhoneFlip, FaShop } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
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
    <div className="w-full min-h-screen flex justify-center px-3">
      <div className="flex flex-col w-full max-w-6xl  my-">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2 mt-3">
          <p> Contact Us </p>
          <FaPhoneAlt />
        </div>
        <div className="w-full rounded-lg">
          <img
            src="https://ambilio.com/wp-content/uploads/2022/12/contact-us-banner-edited.jpeg"
            alt="contact us"
            className="rounded-md object-cover"
          />
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow my-8">
          <div className="stat">
            <div className="stat-figure text-green-600">
              <FaPhoneAlt size={24} />
            </div>
            <div className="stat-value">Phone</div>
            <div className="stat-title">
              <a href="tel:+017903570962">7903570962</a>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-green-600">
              <MdEmail size={24} />
            </div>
            <div className="stat-value">Email</div>
            <div className=" stat-title">
              <a href="mailto:abhi885990@gmail.com">abhi885990@gmail.com</a>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-green-600">
              <FaGlobe size={24} />
            </div>
            <div className="stat-value">website</div>
            <div className="stat-title">
              <a href="google.com" target="_blank">
                www.google.com
              </a>
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-green-600">
              <FaLocationDot size={24} />
            </div>
            <div className="stat-value">Location</div>
            <div className="stat-title w-20">
              <p> 3rd and 7th floor</p>
              <p>Golf View Corporate Tower 1</p>

              <p>Sector 42, Gurugram, Haryana 122002</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full rounded-md my-8 gap-6 md:gap-0">
          <div className="overflow-hidden w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883842!2d77.04417347155065!3d28.52725273882469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710325201583!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="object-cover"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col px-3 w-full items-center bg-base-200">
            <p className="font-bold text-3xl my-2">Write To Us</p>
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

              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
