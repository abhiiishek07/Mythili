import React, { useState } from 'react';

const NewProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    size: "",
    details: "",
    images: [],
    amenities: [],
    brochure: null,
    video: "",
    developerInfo: "",
    googleMapLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: [...formData.images, ...files], // Add the uploaded images to the images array
    });
  };

  const handleAmenitiesChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, name],
      });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter((item) => item !== name),
      });
    }
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
      images: [],
      amenities: [],
      brochure: null,
      video: "",
      developerInfo: "",
      googleMapLink: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Property Listing</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
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
              <label htmlFor="images" className="block text-sm font-semibold mb-1">
                Images:
              </label>
              <div className="flex items-center space-x-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    {image && (
                      <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        const updatedImages = formData.images.filter(
                          (img) => img !== image
                        )
                        setFormData({ ...formData, images: updatedImages })
                      }}
                      className="absolute top-0 right-0 w-6 h-6 text-white bg-red-500 rounded-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
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
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Amenities:
              </label>
              <div className="space-y-2">
                <div>
                  <input
                    type="checkbox"
                    id="swimmingPool"
                    name="Swimming Pool"
                    onChange={handleAmenitiesChange}
                    className="mr-2"
                  />
                  <label htmlFor="swimmingPool">Swimming Pool</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="gym"
                    name="Gym"
                    onChange={handleAmenitiesChange}
                    className="mr-2"
                  />
                  <label htmlFor="gym">Gym</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="parking"
                    name="Parking"
                    onChange={handleAmenitiesChange}
                    className="mr-2"
                  />
                  <label htmlFor="parking">Parking</label>
                </div>
                {/* Add more checkboxes for other amenities */}
              </div>
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
              <label htmlFor="googleMapLink" className="block text-sm font-semibold mb-1">
                Google Maps Link:
              </label>
              <input
                type="text"
                id="googleMapLink"
                name="googleMapLink"
                value={formData.googleMapLink}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter Google Maps link"
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProperty;