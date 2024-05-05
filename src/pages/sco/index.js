import SCO from "@/screens/Properties/SCO";
import React from "react";

import { getPropertiesByType } from "../api/properties/getPropertiesByType";

export async function getServerSideProps() {
  const data = await getPropertiesByType("sco");

  return {
    props: {
      data,
    },
  };
}

const SCOPage = ({data}) => {
  return <SCO data={data} />;
};

export default SCOPage;
