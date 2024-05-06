import Residential from "@/screens/Properties/Residential";
import React from "react";
import { getPropertiesByType } from "../api/properties/getPropertiesByType";

export async function getServerSideProps() {
  const data = await getPropertiesByType("residential");

  return {
    props: {
      data,
    },
  };
}

const ResidentialPage = ({ data }) => {
  return <Residential data={data} />;
};

export default ResidentialPage;
