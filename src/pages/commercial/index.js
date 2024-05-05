import Commercial from "@/screens/Properties/Commercial";
import React from "react";
import { getPropertiesByType } from "../api/properties/getPropertiesByType";

export async function getServerSideProps() {
  const data = await getPropertiesByType("commercial");

  return {
    props: {
      data,
    },
  };
}

const Index = ({ data }) => {
  console.log("daty", data);
  return <Commercial data={data} />;
};

export default Index;
