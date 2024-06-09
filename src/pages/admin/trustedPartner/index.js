import React, { useState, useEffect } from 'react';
import { getAllTrustedPartners } from '@/pages/api/getAllPartners';
import axios from 'axios';
import toast from 'react-hot-toast';
import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "@/lib/utils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export async function getServerSideProps(context) {
  const session = await getIronSession(
    context.req,
    context.res,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const data = await getAllTrustedPartners();
  return {
    props: {
      images: data,
    },
  };
}

const TrustedPartners = ({ images: initialImages }) => {
  const [images, setImages] = useState(initialImages);
  const [newImages, setNewImages] = useState([]);
  const [newImageUrls, setNewImageUrls] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);
  };

  const addImages = async () => {
    let imagesURL = [];
    try {
      for (const imageFile of newImages) {
        const imageRef = ref(storage, `images/${imageFile.name}`);
        const imageSnapshot = await uploadBytes(imageRef, imageFile);
        const imageDownloadURL = await getDownloadURL(imageSnapshot.ref);
        imagesURL.push(imageDownloadURL);
      }

      const res = await axios.post('/api/trustedPartner', { images: imagesURL });
      if (res.status === 200) {
        setImages((prevImages) => [...prevImages, ...imagesURL]);
        toast.success("Congratulations! Upload Done");
      } else {
        toast.error("Please try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trusted Partners</h1>
      <div className="mb-4">
        <input
          type="file"
          name="images"
          id="images"
          accept="image/*"
          className="w-full"
          multiple
          required
          onChange={handleImageUpload}
        />
        <button
          onClick={addImages}
          className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
        >
          Add Images
        </button>
      </div>
      {images.length === 0 ? (
        <p>No images available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image.url} alt="Trusted Partner" className="w-full h-auto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrustedPartners;
