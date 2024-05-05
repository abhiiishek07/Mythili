import { clsx } from "clsx";
import { getIronSession } from "iron-session";
// import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const defaultSession = {
  email: "",
  isLoggedIn: false,
};

export const sessionOptions = {
  password: process.env.SECRET_KEY,
  cookieName: "real-estate",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
