import { storage } from "@/lib/firebase/firebase";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const NewProperty = () => {
  const [loading, setLoading] = useState(false);
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
    type: "",
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
      images: [...formData.images, ...files],
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

  const handleBrocheureChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      brochure: file,
    });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      video: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    console.log(formData);

    let imagesURL = [];

    try {
      for (const imageFile of formData.images) {
        const imageRef = ref(storage, `images/${imageFile.name}`);
        const imageSnapshot = await uploadBytes(imageRef, imageFile);
        const imageDownloadURL = await getDownloadURL(imageSnapshot.ref);
        imagesURL.push(imageDownloadURL);
      }

      let brochureURL = "";
      const pdfRef = ref(storage, `brochures/${formData.brochure.name}`);
      const brochureSnapshot = await uploadBytes(pdfRef, formData.brochure);
      const brocheureDownloadURL = await getDownloadURL(brochureSnapshot.ref);
      brochureURL = brocheureDownloadURL;

      let videoUrl = "";

      console.log("video", formData.video);

      if (formData.video) {
        const videoRef = ref(storage, `videos/${formData.video.name}`);
        const videoSnapshot = await uploadBytes(videoRef, formData.video);
        const videoDownloadURL = await getDownloadURL(videoSnapshot.ref);
        videoUrl = videoDownloadURL;
      }
      console.log("video url", videoUrl);
      let data = {
        title: formData.title,
        price: formData.price,
        location: formData.location,
        size: formData.size,
        details: formData.details,
        images: imagesURL,
        amenities: formData.amenities,
        brochure: brochureURL,
        video: videoUrl,
        developerInfo: formData.developerInfo,
        googleMapLink: formData.googleMapLink,
        type: formData.type,
      };

      const res = await axios.post("/api/properties/addNew", data);

      if (res.status === 200) {
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
          type: "",
        });
        toast.success("Congratulations ! New Property added");
      } else {
        toast.error("Please try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("Please try again");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-3">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg my-10">
        <h2 className="text-2xl font-bold mb-4">Add New Property Listing</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold mb-1"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md input input-bordered"
                placeholder="Enter title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-semibold mb-1"
              >
                Price:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md input input-bordered"
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
                className="w-full px-4 py-2 border rounded-md input input-bordered"
                placeholder="Enter location"
                required
              />
            </div>
            <div>
              <label
                htmlFor="size"
                className="block text-sm font-semibold mb-1"
              >
                Size:
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md input input-bordered"
                placeholder="Enter size"
                required
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-semibold mb-1"
              >
                Type of property :
              </label>
              <select
                className="select select-bordered w-full"
                onChange={handleChange}
                id="type"
                name="type"
              >
                <option disabled selected={!formData.type}>
                  Pick one
                </option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="sco">SCO</option>
                <option value="plot">Plot</option>
              </select>
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
                className="w-full px-4 py-2 border rounded-md input input-bordered"
                placeholder="Enter details"
                required
              ></textarea>
            </div>
            <div className="my-3">
              <label
                htmlFor="images"
                className="block text-sm font-semibold mb-1"
              >
                Images:
              </label>
              <div className="flex flex-col items-center justify-center space-x-4 gap-3">
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
                <div className="flex justify-start flex-wrap gap-3 w-full">
                  {formData?.images?.map((image, index) => (
                    <div key={index} className="relative flex">
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
                          );
                          setFormData({ ...formData, images: updatedImages });
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
                </div>
              </div>
            </div>
            <label
              htmlFor="video"
              className="block text-sm font-semibold mb-1 mt-4"
            >
              Video:
            </label>
            <input
              type="file"
              id="video"
              name="video"
              accept=".mp4, .mov, .avi"
              onChange={handleVideoChange}
              className="w-full"
            />
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
                onChange={handleBrocheureChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="googleMapLink"
                className="block text-sm font-semibold mb-1"
              >
                Google Maps Link:
              </label>
              <input
                type="text"
                id="googleMapLink"
                name="googleMapLink"
                value={formData.googleMapLink}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md  input input-bordered"
                placeholder="Enter Google Maps link"
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
                className="w-full px-4 py-2 border rounded-md  input input-bordered"
                placeholder="Enter developer information"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary uppercase text-white py-2 rounded-md  "
            >
              {loading && (
                <span className="loading loading-spinner loading-md"></span>
              )}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProperty;
