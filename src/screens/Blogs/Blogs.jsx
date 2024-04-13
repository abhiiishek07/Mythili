import React from "react";
import Link from "next/link";
import BlogPost from "@/components/Blog/BlogPost";



const Blogs = () => {
  return (
    <div className="w-full min-h-screen flex justify-center px-3">
      <div className="flex flex-col w-full max-w-6xl  my-">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2 mt-3">
          <p> Blogs</p>
        </div>
        <div className="w-full rounded-lg">
          <img
            src="https://d1nfgpflnbq58s.cloudfront.net/pages/January2021/Hzj6ogMsXVAwGNumVxVe.webp"
            alt="contact us"
            className="rounded-md object-cover"
          />
        </div>
        <div className="my-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog post */}
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
