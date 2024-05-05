import Residential from "@/screens/Properties/Residential";
import React from "react";

export async function getServerSideProps() {
  const data = await getPropertiesByType("residential");

  return {
    props: {
      data,
    },
  };
}

const ResidentialPage = () => {
  return <Residential />;
};

export default ResidentialPage;
