import React, { useState } from "react";
import EditBlog from "@/screens/EditBlog/EditBlog";

import { sessionOptions } from "@/lib/utils";
import { getIronSession } from "iron-session";
import { getblogData } from "@/pages/api/blogs/getBlogData";
import Link from "next/link";
import Editor from "@/components/Lexical/Editor";
import { EMPTY_EDITOR } from "@/constants/constants";
import { $getRoot } from "lexical";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase/firebase";
import axios from "axios";
import toast from "react-hot-toast";

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

  const { blogId } = context.params;

  const data = await getblogData(blogId);

  return {
    props: { data: JSON.parse(JSON.stringify(data)), blogId },
  };
}

const BlogsEdit = ({ data, blogId }) => {
  if (!data) {
    return <Error statusCode={404} title="Property Not Found" />;
  }

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: data.title,
    image: data.image,
    description: data.description,
    htmlDescription: data.htmlDescription,
    plainTextDescription: data.plainTextDescription,
    newImage: "",
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Only get the first file
    setFormData({
      ...formData,
      newImage: file,
    });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.image || !formData.plainTextDescription) {
      return toast.error("Please fill all the feilds");
    }
    setLoading(true);

    let imageDownloadURL = null;

    if (formData.newImage) {
      const imageRef = ref(storage, `images/${formData.newImage.name}`);
      const imageSnapshot = await uploadBytes(imageRef, formData.newImage);
      imageDownloadURL = await getDownloadURL(imageSnapshot.ref);
    }

    const data = {
      id: blogId,
      title: formData.title,
      image: imageDownloadURL || formData.image,
      description: JSON.stringify(formData.description),
      htmlDescription: formData.htmlDescription,
      plainTextDescription: formData.plainTextDescription,
      time: new Date().toDateString().toString(),
    };

    const res = await axios.post("/api/blogs/update", data);

    if (res.status === 200) {
      // editorKeyRef.current = `${editorKeyRef.current}-dup`;
      formData.image = imageDownloadURL || formData.image;
      toast.success("Congratulations! Blog Details updated");
    } else {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className=" bg-gray-50 p-3 mx-auto  ">
      <div className="max-w-4xl mx-auto my-10">
        <div className="text-sm breadcrumbs flex f">
          <ul>
            <li>
              <Link href="/admin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Admin
              </Link>
            </li>
            <li>
              <Link href="/admin/blogs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                All Blogs
              </Link>
            </li>
            <li>
              <span className="inline-flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pen"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                </svg>
                Edit Blog
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full h-fit p-8 bg-white rounded-lg shadow-lg  gap-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">Update Blog</h2>
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
            <label
              htmlFor="details"
              className="block text-sm font-semibold mb-1"
            >
              Details:
            </label>
            <Editor
              // key={editorKeyRef.current}
              value={formData.description || EMPTY_EDITOR}
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
            {!formData.newImage && (
              <img
                src={formData.image}
                alt="Old Image"
                className="mt-2 max-w-full"
              />
            )}
            {formData.newImage && (
              <img
                src={URL.createObjectURL(formData.newImage)}
                alt="New Image"
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
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsEdit;
