import React, { useState } from "react";

const ContactUsModal = ({ openContactUs, setOpenContactUs }) => {
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

            <button type="submit" className="btn btn-primary w-full">
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
