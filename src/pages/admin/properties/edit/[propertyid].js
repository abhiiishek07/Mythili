import EditProperty from "@/screens/EditProperty/EditProperty";
import React from "react";
import { getPropertyInfo } from "@/pages/api/properties/getPropertyInfo";
import Error from "next/error";

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
  const { propertyid } = context.params;

  const data = (await getPropertyInfo(propertyid)) || null;

  return {
    props: {
      data,
    },
  };
}

const PropertyDetailEdit = ({ data }) => {
  if (!data) {
    return <Error statusCode={404} title="Property Not Found" />;
  }
  return <EditProperty data={data} />;
};

export default PropertyDetailEdit;
