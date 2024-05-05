import Plots from "@/screens/Properties/Plots";
import React from "react";
import { getPropertiesByType } from "../api/properties/getPropertiesByType";

export async function getServerSideProps() {
  const data = await getPropertiesByType("plot");

  return {
    props: {
      data,
    },
  };
}

const PlotsPage = ({ data }) => {
  console.log("daty", data);
  return <Plots data={data} />;
};

export default PlotsPage;
