import useSWR from "swr";
import { defaultSession, sessionOptions } from "./utils";
import useSWRMutation from "swr/mutation";

const sessionApiRoute = "/api/session";

async function fetchJson(input, init) {
  return fetch(input, {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    ...init,
  }).then((res) => res.json());
}

function doLogin(url, { arg }) {
  return fetchJson(url, {
    method: "POST",
    body: JSON.stringify({ email: arg }),
  });
}

function doLogout(url) {
  return fetchJson(url, {
    method: "DELETE",
  });
}

export default function useSession() {
  const { data: session, isLoading } = useSWR(sessionApiRoute, fetchJson, {
    fallbackData: defaultSession,
  });

  const { trigger: login } = useSWRMutation(sessionApiRoute, doLogin, {
    // the login route already provides the updated information, no need to revalidate
    revalidate: false,
  });
  const { trigger: logout } = useSWRMutation(sessionApiRoute, doLogout);

  return { session, logout, login, isLoading };
}
