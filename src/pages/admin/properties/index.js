import { getAllProperties } from "@/pages/api/properties/getAllProperties";
import PropertyDetailPage from "@/screens/PropertyDetailsPage/PropertyDetailPage";
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
  const data = await getAllProperties();

  return {
    props: {
      data,
    },
  };
}

const PropertiesPageList = ({ data }) => {
  return <PropertyDetailPage list={data} />;
};

export default PropertiesPageList;
