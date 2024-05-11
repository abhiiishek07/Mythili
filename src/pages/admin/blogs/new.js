import React, { useState, useId, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { getIronSession } from "iron-session";
import { sessionOptions } from "@/lib/utils";
import Editor from "@/components/Lexical/Editor";
import { EMPTY_EDITOR } from "@/constants/constants";
import { $getRoot } from "lexical";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase/firebase";

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

  return {
    props: {},
  };
}

const NewBlog = () => {
  const [loading, setLoading] = useState(false);
  const defaultKey = useId();
  const editorKeyRef = useRef(defaultKey);

  const [formData, setFormData] = useState({
    title: "",
    image: null,
    description: EMPTY_EDITOR,
    htmlDescription: "",
    plainTextDescription: "",
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Only get the first file
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.image || !formData.plainTextDescription) {
      return toast.error("Please fill all the feilds");
    }
    setLoading(true);

    const imageRef = ref(storage, `images/${formData.image.name}`);
    const imageSnapshot = await uploadBytes(imageRef, formData.image);
    const imageDownloadURL = await getDownloadURL(imageSnapshot.ref);

    const data = {
      title: formData.title,
      details: formData.details,
      image: imageDownloadURL,
      description: JSON.stringify(formData.description),
      htmlDescription: formData.htmlDescription,
      plainTextDescription: formData.plainTextDescription,
      time: new Date().toDateString().toString(),
    };

    const res = await axios.post("/api/blogs/addNew", data);

    if (res.status === 200) {
      editorKeyRef.current = `${editorKeyRef.current}-dup`;

      setFormData({
        formData,
        title: "",
        details: "",
        image: null,
        description: EMPTY_EDITOR,
        htmlDescription: "",
        plainTextDescription: "",
      });
      toast.success("Congratulations! New blog created");
    } else {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="flex  justify-center bg-gray-50 p-3">
      <div className="w-full h-fit max-w-4xl p-8 bg-white rounded-lg shadow-lg my-10 gap-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Add New Blog Post</h2>
        <div>
          <label htmlFor="title" className="block text-sm font-semibold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded-md input input-bordered"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="details" className="block text-sm font-semibold mb-1">
            Details:
          </label>
          <Editor
            key={editorKeyRef.current}
            value={formData.description}
            onChange={(editorState, htmlString) => {
              setFormData({
                ...formData,
                description: editorState,
                htmlDescription: htmlString,
                plainTextDescription: editorState.read(() =>
                  $getRoot().getTextContent()
                ),
              });
            }}
          />
        </div>
        <div className="my-3">
          <label htmlFor="image" className="block text-sm font-semibold mb-1">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full"
            required
          />
          {/* Render uploaded image */}
          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Uploaded"
              className="mt-2 max-w-full"
            />
          )}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full btn bg-green-700 uppercase text-white py-2 rounded-md"
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

export default NewBlog;
