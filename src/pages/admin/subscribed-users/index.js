import { getAllSubscribedUsers } from "@/pages/api/getSubscribedUsers";
import SubscribedUsers from "@/screens/Admin/SubscribedUsers/SubscribedUsers";
import React from "react";
import { MdDelete } from "react-icons/md";

export async function getServerSideProps() {
  const data = await getAllSubscribedUsers();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

const SubscribedUsersPage = ({ data }) => {
  return <SubscribedUsers list={data} />;
};

export default SubscribedUsersPage;
