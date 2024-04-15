import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactUsModal = ({ openContactUs, setOpenContactUs }) => {
  const [submitting, setSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
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
    setSubmitting(true);

    const res = await axios.post("/api/contactUs", {
      data: formData,
    });

    if (res.status === 200) {
      toast.success("Thank you for getting in touch with us!");
    } else {
      toast.error("Something went wrong");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setSubmitting(false);
  };
  return (
    <dialog id="my_modal_2" className="modal" open={openContactUs}>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => setOpenContactUs(false)}
        >
          ✕
        </button>
        <div className="flex flex-col px-3 w-full items-center">
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

            <button
              type="submit"
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
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setOpenContactUs(false)}>close</button>
      </form>
    </dialog>
  );
};

export default ContactUsModal;
