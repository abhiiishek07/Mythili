import Homepage from "@/screens/Homepage/Homepage";
import React from "react";
import { getAllProperties } from "./api/properties/getAllProperties";

export async function getServerSideProps() {
  const data = await getAllProperties();

  return {
    props: {
      data,
    },
  };
}

const Home = ({ data }) => {
  return <Homepage data={data} />;
};

export default Home;
