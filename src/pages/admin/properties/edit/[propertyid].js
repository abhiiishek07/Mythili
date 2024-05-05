import EditProperty from "@/screens/EditProperty/EditProperty";
import React from "react";
import { getPropertyInfo } from "@/pages/api/properties/getPropertyInfo";
import Error from "next/error";

export async function getServerSideProps(context) {
  const {propertyid} = context.params;
  console.log("propertyid")
  console.log(propertyid)

  const data = (await getPropertyInfo(propertyid)) || null;
  console.log(data)

  return {
    props: {
      data,
    },
  };
}

const PropertyDetailEdit = ({data}) => {
  if(!data){
    return <Error statusCode={404} title="Property Not Found"/>
  }
  return <EditProperty data={data}/>;
};

export default PropertyDetailEdit;
