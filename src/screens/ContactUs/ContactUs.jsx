import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (formData.name.trim() === "") {
      validationErrors.name = "Please enter your name";
    }
    if (formData.email.trim() === "") {
      validationErrors.email = "Please enter your email";
    }
    if (formData.phone.trim() === "") {
      validationErrors.phone = "Please enter your phone number";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const res = await axios.post("/api/contactUs", {
        data: formData,
      });

      if (res.status === 200) {
        toast.success("Thank you for getting in touch with us!");
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }

    setSubmitting(false);
  };

  return (
    <div className="">
      {/* BANNNER */}
      <div className="w-full bg-banner_contact_us">
        <div className="w-full h-full bg-black bg-opacity-60 flex items-center">
          <div className="container pl-4 lg:pl-28">
            <h1 className="mt-2 text-2xl font-bold  lg:text-4xl  text-white">
              Contact us
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto my-6 p-3">
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {/* PHONE */}
            <div className="shadow-md border rounded-lg py-4 flex flex-col items-center justify-center">
              <FaPhoneAlt size={28} color="green" />
              <p className="text-xl lg:text-2xl font-bold py-4">Phone</p>
              <a href="tel:+8826638919" className="text-sm lg:text-lg">
                8826638919
              </a>
            </div>

            {/* EMAIL*/}
            <div className="shadow-md border rounded-lg py-4 px-2 flex flex-col items-center justify-center">
              <MdEmail size={28} color="green" />
              <p className="text-xl lg:text-2xl font-bold py-4">Email</p>
              <a
                href="mailto:marketing.mythilirealty@gmail.com"
                className="text-xs lg:text-lg"
              >
                marketing.mythilirealty@gmail.com
              </a>
            </div>

            {/* WEBSITE */}
            <div className="shadow-md border rounded-lg py-4 flex flex-col items-center justify-center">
              <FaGlobe size={28} color="green" />
              <p className="text-xl lg:text-2xl font-bold py-4">Website</p>
              <a
                href="https://www.mythilirealty.com"
                target="_blank"
                className="text-sm lg:text-lg"
              >
                www.mythilirealty.com
              </a>
            </div>

            {/* PHONE */}
            <div className="shadow-md border rounded-lg py-4 flex flex-col items-center justify-center">
              <FaLocationDot size={28} color="green" />
              <p className="text-xl lg:text-2xl font-bold py-4">Office</p>
              <div className="text-center text-xs lg:text-lg">
                <p> 3rd and 7th floor</p>
                <p>Golf View Corporate Tower 1</p>

                <p>Sector 42, Gurugram, </p>
                <p>Haryana 122002</p>
              </div>
            </div>
          </div>

          {/* LOCATION AND CONTACT US FORM */}
          <div className="grid  grid-cols-1 lg:grid-cols-2 mt-12 gap-4">
            <div className="overflow-hidden mw-full  md:flex-none col-span-1">
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
            <div className="flex flex-col px-3 w-full grow  gap-3 ">
              <p className="font-bold text-xl lg:text-3xl my-2 text-center">
                Write To Us
              </p>
              <form
                className="w-full flex flex-col items-center gap-6 mt-2 lg:mt-5"
                onSubmit={handleSubmit}
              >
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Name<span className="text-red-500">*</span>
                  </label>
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
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
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
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="flex items-start  w-full">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn bg-green-800 uppercase text-white"
                  >
                    {submitting && (
                      <span className="loading loading-spinner loading-md"></span>
                    )}
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
