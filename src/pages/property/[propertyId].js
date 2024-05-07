import PropertyInfo from "@/screens/PropertyInfo/PropertyInfo";
import React from "react";
import { getPropertyInfo } from "../api/properties/getPropertyInfo";
import Error from "next/error";
import { getPropertiesByType } from "../api/properties/getPropertiesByType";

export async function getServerSideProps(context) {
  const { propertyId } = context.params;

  const data = (await getPropertyInfo(propertyId)) || null;

  const similarProperty = await getPropertiesByType(data.type)

  data.id = propertyId;

  return {
    props: {
      similarProperty,
      data,
    },
  };
}

const Property = ({ data ,similarProperty }) => {
  if (!data) {
    return <Error statusCode={404} title="Property Not Found" />;
  }
  return <PropertyInfo data={data} similarProperty={similarProperty} />;
};

export default Property;
