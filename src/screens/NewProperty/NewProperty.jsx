import { storage } from "@/lib/firebase/firebase";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Editor from "@/components/Lexical/Editor";
import { AMENITIES, EMPTY_EDITOR } from "@/constants/constants";
import { $getRoot } from "lexical";

const NewProperty = () => {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(EMPTY_EDITOR);
  const [htmlDescription, setHTMLDescription] = useState();
  const [plainTextDescription, setPlainTextDescription] = useState("");

  const handleOnChange = (editorState, htmlString) => {
    setDescription(editorState);
    setPlainTextDescription(
      editorState.read(() => $getRoot().getTextContent())
    );
    setHTMLDescription(htmlString);
  };

  const checkEmptyFields = () => {
    if (
      !formData.amenities ||
      !formData.city ||
      !formData.address ||
      !formData.brochure ||
      !formData.developerInfo ||
      !formData.googleMapLink ||
      !formData.images ||
      !formData.price ||
      !formData.size ||
      !formData.title ||
      !formData.type
    )
      return true;

    return false;
  };

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    size: "",

    images: [],
    amenities: [],
    brochure: null,
    video: "",
    developerInfo: "",
    googleMapLink: "",
    type: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "status" ? JSON.parse(value) : value;
    setFormData({
      ...formData,
      [name]: newValue,
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
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, value],
      });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter((item) => item !== value),
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

  const handleSubmit = async () => {
    console.log("d", formData);
    if (checkEmptyFields()) {
      return toast.error("Please enter all the required feilds !");
    }

    setLoading(true);

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

      if (formData.video) {
        const videoRef = ref(storage, `videos/${formData.video.name}`);
        const videoSnapshot = await uploadBytes(videoRef, formData.video);
        const videoDownloadURL = await getDownloadURL(videoSnapshot.ref);
        videoUrl = videoDownloadURL;
      }

      let data = {
        title: formData.title,
        price: formData.price,
        address: formData.address,
        city: formData.city,
        size: formData.size,
        images: imagesURL,
        amenities: formData.amenities,
        brochure: brochureURL,
        video: videoUrl,
        developerInfo: formData.developerInfo,
        googleMapLink: formData.googleMapLink,
        type: formData.type,
        description: JSON.stringify(description),
        htmlDescription: htmlDescription,
        plainTextDescription: plainTextDescription,
        status: formData.status,
      };

      const res = await axios.post("/api/properties/addNew", data);

      if (res.status === 200) {
        setFormData({
          title: "",
          price: "",
          address: "",
          city: "",
          size: "",

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
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg my-10 gap-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Add New Property Listing</h2>
        <div>
          <label htmlFor="Name" className="block text-sm font-semibold mb-1">
            Name* :
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md input input-bordered"
            placeholder="Enter property name"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-semibold mb-1">
            Price* :
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
          <label htmlFor="address" className="block text-sm font-semibold mb-1">
            Address* :
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md input input-bordered"
            placeholder="Enter property address"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-semibold mb-1">
            City* :
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md input input-bordered"
            placeholder="Enter property City"
            required
          />
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-semibold mb-1">
            Size* :
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
          <label htmlFor="type" className="block text-sm font-semibold mb-1">
            Type of property* :
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
          <label htmlFor="status" className="block text-sm font-semibold mb-1">
            Status* :
          </label>
          <select
            className="select select-bordered w-full"
            onChange={handleChange}
            id="status"
            name="status"
            value={JSON.stringify(formData.status)} // Ensure the select value is a stringified object
          >
            <option value="">Pick one</option>
            <option
              value={JSON.stringify({
                name: "New Launch",
                value: "new-launch",
              })}
            >
              New Launch
            </option>
            <option
              value={JSON.stringify({
                name: "Under Construction",
                value: "under-construction",
              })}
            >
              Under Construction
            </option>
            <option
              value={JSON.stringify({
                name: "Ready to Move",
                value: "ready-to-move",
              })}
            >
              Ready To Move
            </option>
          </select>
        </div>

        <div className="relative">
          <label htmlFor="details" className="block text-sm font-semibold mb-1">
            Details* :
          </label>
          <Editor value={description} onChange={handleOnChange} />
        </div>

        <div className="my-3">
          <label htmlFor="images" className="block text-sm font-semibold mb-1">
            Images* :
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
          Video :
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
          <label className="block text-sm font-semibold mb-1">Amenities:</label>
          <div className="grid grid-cols-4 gap-x-8 gap-y-2">
            {AMENITIES.map((item) => (
              <div
                key={item.id}
                className="flex items-center  w-full max-w-xs justify-between"
              >
                <span className="label-text">{item.name}</span>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  name={item.name}
                  onChange={handleAmenitiesChange}
                  className="checkbox checkbox-success"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="brochure"
            className="block text-sm font-semibold mb-1"
          >
            Brochure (PDF)* :
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
            Google Maps Link* :
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
            Developer Information* :
          </label>
          <textarea
            id="developerInfo"
            name="developerInfo"
            value={formData.developerInfo}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md  textarea textarea-bordered text-area-lg"
            placeholder="Enter developer information"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full btn btn-primary uppercase text-white py-2 rounded-md  "
        >
          {loading && (
            <span className="loading loading-spinner loading-md"></span>
          )}
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewProperty;
