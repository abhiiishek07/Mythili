import PropertyDetailPage from "@/screens/PropertyDetailsPage/PropertyDetailPage";
import React from "react";

import { sessionOptions } from "@/lib/utils";
import { getIronSession } from "iron-session";
import { getAllPropertiesAdmin } from "@/pages/api/properties/getAllPropertiesAdmin";

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
  const data = await getAllPropertiesAdmin();

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
