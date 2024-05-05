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
            <div className="stat-figure text-green-800">
              <a href="tel:+017903570962">
                {" "}
                <FaPhoneAlt size={24} />
              </a>
            </div>
            <div className="stat-value">Phone</div>
            <div className="stat-title">
              <a href="tel:+017903570962">987654321</a>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-green-800">
              <a href="mailto:abhi885990@gmail.com">
                {" "}
                <MdEmail size={24} />
              </a>
            </div>
            <div className="stat-value">Email</div>
            <div className=" stat-title">
              <a href="mailto:abhi885990@gmail.com">realestate@gmail.com</a>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-green-800">
              <a href="google.com" target="_blank">
                <FaGlobe size={24} />
              </a>
            </div>
            <div className="stat-value">website</div>
            <div className="stat-title">
              <a href="google.com" target="_blank">
                www.google.com
              </a>
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-green-800">
              <a
                href="https://www.google.com/maps/place/Hero+Homes+sector+104+Dwarka+Expressway/@28.4839323,76.9933505,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1796a6464969:0x86d5a3c4aa1ab2c7!8m2!3d28.4839323!4d76.9959254!16s%2Fg%2F11h2pk4_n6?entry=ttu"
                target="_blank"
              >
                {" "}
                <FaLocationDot size={24} />
              </a>
            </div>
            <div className="stat-value">Location</div>
            <div className="stat-title w-20">
              <p> 3rd and 7th floor</p>
              <p>Golf View Corporate Tower 1</p>

              <p>Sector 42, Gurugram, Haryana 122002</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full rounded-md my-8  gap-6 md:gap-0 ">
          <div className="overflow-hidden mw-full  md:flex-none">
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
          <div className="flex flex-col px-3 w-full grow  gap-3 items-center">
            <p className="font-bold text-3xl my-2">Write To Us</p>
            <form
              className="w-full flex flex-col items-center gap-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Name
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
                  Email
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
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Phone Number
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
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn bg-green-800 uppercase text-white w-full"
              >
                {submitting && (
                  <span className="loading loading-spinner loading-md"></span>
                )}
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
