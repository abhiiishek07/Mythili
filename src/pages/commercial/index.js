import Commercial from "@/screens/Properties/Commercial";
import React from "react";
import { getAllCommercialProperties } from "../api/properties/getCommercialProperties";

export async function getServerSideProps() {
  const data = await getAllCommercialProperties();

  return {
    props: {
      data,
    },
  };
}

const Index = ({ data }) => {
  console.log("daty", data);
  return <Commercial />;
};

export default Index;
