import React from "react";
import { getblogData } from "../api/blogs/getBlogData";
import Link from "next/link";
import { FaBackspace } from "react-icons/fa";

export async function getServerSideProps(context) {
  const { blogId } = context.params;
  const data = await getblogData(blogId);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

const BlogsInfoPage = ({ data }) => {
  return (
    <section className="section min-h-screen w-full flex flex-col items-center justify-center p-4 mb-16 ">
      <div className=" container flex flex-col w-full max-w-4xl h-full mt-10 ">
        <Link
          href="/blogs"
          className="btn btn-success btn-outline btn-sm mb-6 self-start"
        >
          <FaBackspace />
          Go Back
        </Link>
        <p className="text-3xl font-bold">{data.title}</p>
        <p className="py-2 text-sm text-gray-400">{data.time}</p>

        <img
          src={data.image}
          alt={`Cover Image for `}
          className="h-[30rem] w-full object-cover rounded-lg "
        />
      </div>
      <div
        className="w-full max-w-4xl prose text-lg my-4"
        dangerouslySetInnerHTML={{ __html: data.htmlDescription }}
      ></div>
      <Link
        href="/blogs"
        className="btn btn-success btn-outline mb-6 self-center mt-16"
      >
        <FaBackspace />
        Go Back
      </Link>
    </section>
  );
};

export default BlogsInfoPage;
