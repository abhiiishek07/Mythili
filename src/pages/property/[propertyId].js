import PropertyInfo from "@/screens/PropertyInfo/PropertyInfo";
import React from "react";
import { getPropertyInfo } from "../api/properties/getPropertyInfo";
import Error from "next/error";

export async function getServerSideProps(context) {
  const { propertyId } = context.params;

  const data = (await getPropertyInfo(propertyId)) || null;

  return {
    props: {
      data,
      propertyId,
    },
  };
}

const Property = ({ data, propertyId }) => {
  if (!data) {
    return <Error statusCode={404} title="Property Not Found" />;
  }
  data.id = propertyId;
  return <PropertyInfo data={data} />;
};

export default Property;
