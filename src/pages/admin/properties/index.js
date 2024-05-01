import { getAllProperties } from "@/pages/api/properties/getAllProperties";
import PropertyDetailPage from "@/screens/PropertyDetailsPage/PropertyDetailPage";
import React from "react";

export async function getServerSideProps() {
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
