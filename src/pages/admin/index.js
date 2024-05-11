import AdminDetails from "@/components/Card/AdminDetails";
import { ADMIN_PAGE_DETAILS } from "@/constants/constants";
import useSession from "@/lib/useSession";
import { defaultSession, sessionOptions } from "@/lib/utils";
import { getIronSession } from "iron-session";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export async function getServerSideProps(context) {
  const session = await getIronSession(
    context.req,
    context.res,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const AdminPage = () => {
  const { logout } = useSession();
  const router = useRouter();
  return (
    <div className="w-full max-w-5xl mx-auto  min-h-screen p-5">
      <div className="flex justify-end items-center mb-4 gap-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 w-[75%]">
          Admin Dashboard
        </h2>
        <button
          className="btn btn-outline m-0 p-0 px-6 py-2 border-red-500 hover:bg-red-500 hover:border-none hover:text-white"
          onClick={(event) => {
            event.preventDefault();
            logout(null, {
              optimisticData: defaultSession,
            });
            toast.success("You are logged out");
            router.push("/admin/login");
          }}
        >
          LOGOUT
        </button>
      </div>

      <div className="flex flex-col rounded-md  bg-base-200 p-8 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ADMIN_PAGE_DETAILS.map((item) => (
            <AdminDetails
              key={item.id}
              title={item.title}
              description={item.description}
              viewAllLink={item.viewAllLink}
              addNewLink={item.addNewLink}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
