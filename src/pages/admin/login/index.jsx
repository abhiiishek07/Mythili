// pages/login.js
import logo from "@/assets/images/mythili_realty_logo.png";
import { auth } from "@/lib/firebase/firebase";
import useSession from "@/lib/useSession";
import { sessionOptions } from "@/lib/utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getIronSession } from "iron-session";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

export async function getServerSideProps(context) {
  const session = await getIronSession(
    context.req,
    context.res,
    sessionOptions
  );

  if (session.isLoggedIn) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { login } = useSession();

  return (
    <div className="flex  justify-center min-h-screen bg-gray-100  px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center max-w-lg w-full h-fit mt-10 bg-white p-8 rounded-lg shadow-md">
        <div className="w-full h-28 overflow-hidden  flex items-center justify-center">
          <Image src={logo.src} alt="logo" width={300} height={10} />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mt-2">
          Welcome back 👋,
        </h2>
        <p className="text-lg mb-3">Please sign in to continue</p>
        <form
          onSubmit={async function (event) {
            event.preventDefault();
            setLoading(true);

            try {
              await signInWithEmailAndPassword(auth, email, password);
              login(email, {
                optimisticData: {
                  isLoggedIn: true,
                  email,
                },
              });
              toast.success("login successful");
              router.push("/admin");
            } catch (error) {
              setError(error.message);
            }
            setLoading(false);
          }}
          method="POST"
          className="w-full"
        >
          <div className="mb-4 ">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                className="grow w-full"
                placeholder="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="grow"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-success w-full uppercase text-white text-lg"
          >
            {loading && (
              <span className="loading loading-spinner loading-md"></span>
            )}
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
