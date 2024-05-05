import { sessionOptions } from "@/lib/utils";
import { getIronSession } from "iron-session";
import { defaultSession } from "@/lib/utils";

export default async function handler(request, response) {
  const session = await getIronSession(request, response, sessionOptions);

  if (request.method === "POST") {
    const { email = "No email" } = request.body;

    session.isLoggedIn = true;
    session.email = email;
    await session.save();

    return response.json(session);
  } else if (request.method === "GET") {
    if (session.isLoggedIn !== true) {
      return response.json(defaultSession);
    }

    return response.json(session);
  } else if (request.method === "DELETE") {
    session.destroy();

    return response.json(defaultSession);
  }

  return response.status(405).end(`Method ${request.method} Not Allowed`);
}
