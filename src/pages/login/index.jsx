// pages/login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const data = userCredential.user.email;
      console.log(data);
      console.log("after login", user);
      router.push("/admin");
    //   window.location.href = "/admin";
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
      console.log(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Mythili Realty</h1>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">Sign in to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="flex items-center border rounded-md px-3 py-2">
              <span className="text-gray-500">
                <FaEnvelope />
              </span>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow ml-2 outline-none text-gray-800 placeholder-gray-500"
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center border rounded-md px-3 py-2">
              <span className="text-gray-500">
                <FaLock />
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-grow ml-2 outline-none text-gray-800 placeholder-gray-500"
                placeholder="Password"
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-green-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;