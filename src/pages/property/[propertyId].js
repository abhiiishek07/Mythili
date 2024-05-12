import PropertyInfo from "@/screens/PropertyInfo/PropertyInfo";
import React from "react";
import { getPropertyInfo } from "../api/properties/getPropertyInfo";
import Error from "next/error";
import { getSimilarProperties } from "../api/properties/getSimilarProperties";
import { notFound } from "next/navigation";

export async function getServerSideProps(context) {
  const { propertyId } = context.params;

  const data = (await getPropertyInfo(propertyId)) || null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  data.id = propertyId;

  const similarProperties = await getSimilarProperties(data.type);

  return {
    props: {
      data,
      similarProperties,
      propertyId,
    },
  };
}

const Property = ({ data, similarProperties }) => {
  if (!data) {
    return <Error statusCode={404} title="Property Not Found" />;
  }

  return <PropertyInfo data={data} similarProperties={similarProperties} />;
};

export default Property;
