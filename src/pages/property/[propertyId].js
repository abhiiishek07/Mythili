import PropertyInfo from "@/screens/PropertyInfo/PropertyInfo";
import React from "react";
import { getPropertyInfo } from "../api/properties/getPropertyInfo";
import Error from "next/error";

export async function getServerSideProps(context) {
  const { propertyid } = context.params;

  const data = (await getPropertyInfo(propertyid)) || null;

  return {
    props: {
      data,
    },
  };
}

const Property = ({ data }) => {
  if (!data) {
    return <Error statusCode={404} title="Property Not Found" />;
  }
  return <PropertyInfo data={data} />;
};

export default Property;
