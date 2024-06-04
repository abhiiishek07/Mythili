import Homepage from "@/screens/Homepage/Homepage";
import React from "react";
import { getAllProperties } from "./api/properties/getAllProperties";
import { getAllBlogs } from "./api/blogs/getAllBlogs";

export async function getServerSideProps() {
  const data = await getAllProperties();

  const blogs = await getAllBlogs();

  return {
    props: {
      data,
      blogs,
    },
  };
}

const Home = ({ data, blogs }) => {
  return <Homepage data={data} blogs={blogs} />;
};

export default Home;
