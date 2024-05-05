import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactUsModal = ({
  openContactUs,
  setOpenContactUs,
  forBrochure,
  setForBrochure,
  propertyData,
}) => {
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

    if (forBrochure) {
      let data = {
        ...formData,
        propertyName: propertyData.name,
        propertyId: propertyData.id,
        time: new Date().toDateString().toString(),
      };
      try {
        const res = await axios.post("/api/brochure", {
          data,
        });

        if (res.status === 200) {
          toast.success("Thank you for enquiring about this property");
          setFormData({
            name: "",
            email: "",
            phone: "",
          });

          if (forBrochure) {
            window.open(setForBrochure);
          }

          setOpenContactUs(false);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
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

          setOpenContactUs(false);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    }

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
          <p className="font-bold text-3xl my-2">
            {forBrochure ? "Enquire Now" : "Write to Us"}
          </p>
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
