import React from "react";
import EditBlog from "@/screens/EditBlog/EditBlog";

import { sessionOptions } from "@/lib/utils";
import { getIronSession } from "iron-session";

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

const BlogsEdit = () => {
  return <EditBlog />;
};

export default BlogsEdit;
