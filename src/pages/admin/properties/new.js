import NewProperty from "@/screens/NewProperty/NewProperty";
import React from "react";

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
const PropertyDetailNew = () => {
  return <NewProperty />;
};

export default PropertyDetailNew;
