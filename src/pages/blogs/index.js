import React from "react";
import Blogs from "@/screens/Blogs/Blogs";
import { getAllBlogs } from "../api/blogs/getAllBlogs";
import RecentBlog from "@/components/Blog/RecentBlog";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogCard from "@/components/Blog/BlogCard";

export async function getServerSideProps() {
  const data = await getAllBlogs();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
const BlogsPage = ({ data }) => {
  return (
    <div className="container min-h-screen w-full">
      <div className="w-full max-w-7xl mx-auto my-12">
        <Swiper
          pagination={{ type: "fraction" }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[30rem] w-full rounded-lg"
        >
          {data.slice(0, 5).map((item) => (
            <SwiperSlide key={item.id}>
              <RecentBlog
                key={item.id}
                id={item.id}
                time={item.time}
                title={item.title}
                image={item.image}
                plainTextDescription={item.plainTextDescription}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full my-10">
          <h2 className="text-3xl font-extrabold">All Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-3">
            {data.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id}
                time={item.time}
                title={item.title}
                image={item.image}
                plainTextDescription={item.plainTextDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
