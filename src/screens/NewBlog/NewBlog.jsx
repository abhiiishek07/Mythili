import React , {useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const NewBlog = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      details: '',
      images: [],
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
        images: files,
      });
    };
  
    const handleSubmit = async () => {
      setLoading(true);
      // Implement form submission logic
      setLoading(false);
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-3">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg my-10 gap-4 flex flex-col">
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
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md input input-bordered"
              placeholder="Enter blog title"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="details" className="block text-sm font-semibold mb-1">
              Details:
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md input input-bordered"
              placeholder="Enter blog details"
              required
            ></textarea>
          </div>
          <div className="my-3">
            <label htmlFor="images" className="block text-sm font-semibold mb-1">
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
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full btn btn-primary uppercase text-white py-2 rounded-md"
          >
            {loading && (
              <span className="loading loading-spinner loading-md"></span>
            )}
            Submit
          </button>
        </div>
      </div>
    );
}

export default NewBlog
