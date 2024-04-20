import React, { useState } from "react";

const EditProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    size: "",
    details: "",
    brochure: null,
    video: "",
    developerInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      images: [...formData.images, file], // Add the uploaded image to the images array
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      title: "",
      price: "",
      location: "",
      size: "",
      details: "",
      images: [], // Reset the images array
      brochure: null,
      video: "",
      developerInfo: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create New Property</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter title"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-semibold mb-1">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold mb-1"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter location"
              required
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-semibold mb-1">
              Size:
            </label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter size"
              required
            />
          </div>
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-semibold mb-1"
            >
              Details:
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter details"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-semibold mb-1"
            >
              Images:
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full"
              multiple
              required
            />
          </div>
          <div>
            <label
              htmlFor="brochure"
              className="block text-sm font-semibold mb-1"
            >
              Brochure (PDF):
            </label>
            <input
              type="file"
              id="brochure"
              name="brochure"
              accept=".pdf"
              onChange={handleFileUpload}
              className="w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="video" className="block text-sm font-semibold mb-1">
              Video:
            </label>
            <input
              type="text"
              id="video"
              name="video"
              value={formData.video}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter video URL"
            />
          </div>
          <div>
            <label
              htmlFor="developerInfo"
              className="block text-sm font-semibold mb-1"
            >
              Developer Information:
            </label>
            <textarea
              id="developerInfo"
              name="developerInfo"
              value={formData.developerInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter developer information"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProperty;
