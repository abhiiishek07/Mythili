import React from "react";
import BlogEdit from "@/screens/BlogEdit/BlogEdit";

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

const BlogsEditpage = () => {
  return <BlogEdit />;
};

export default BlogsEditpage;
