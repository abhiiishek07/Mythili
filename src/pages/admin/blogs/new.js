import React from "react";
import NewBlog from "@/screens/NewBlog/NewBlog";

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

const BlogsNew = () => {
  return <NewBlog />;
};

export default BlogsNew;
