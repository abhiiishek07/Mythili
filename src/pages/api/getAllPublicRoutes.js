import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllPublicRoutesFn = async (orgId) => {
  initializeFirebaseAdmin();

  let routes = [];
  try {
    routes.push(
      {
        loc: "/",
        lastmod: undefined,
        priority: 1.0,
        changefreq: "daily",
      },
      {
        loc: "/properties",
        lastmod: undefined,
        priority: 1.0,
        changefreq: "daily",
      },
      {
        loc: "/about-us",
        lastmod: undefined,
        priority: 1.0,
        changefreq: "daily",
      },
      {
        loc: "/residential",
        lastmod: undefined,
        priority: 0.8,
        changefreq: "daily",
      },
      {
        loc: "/commercial",
        lastmod: undefined,
        priority: 0.8,
        changefreq: "daily",
      },
      {
        loc: "/plots",
        lastmod: undefined,
        priority: 0.8,
        changefreq: "daily",
      },
      {
        loc: "/sco",
        lastmod: undefined,
        priority: 0.8,
        changefreq: "daily",
      }
    );

    //PROPERTIES
    const propertiesSnap = await admin
      .firestore()
      .collection("properties")
      .get();

    for (const propertyDoc of propertiesSnap.docs) {
      routes.push({
        loc: `/property/${propertyDoc.id}`,
        lastmod: undefined,
        priority: 0.8,
        changefreq: "daily",
      });
    }

    const blogsSnap = await admin.firestore().collection("blogs").get();

    for (const blogDoc of blogsSnap.docs) {
      routes.push({
        loc: `/blogs/${blogDoc.id}`,
        lastmod: undefined,
        priority: 0.8,
        changefreq: "daily",
      });
    }

    routes.push(
      {
        loc: "/blogs",
        lastmod: undefined,
        priority: 0.8,
        changefreq: "daily",
      },
      {
        loc: "/contact-us",
        lastmod: undefined,
        priority: 0.7,
        changefreq: "daily",
      },
      {
        loc: "/privacy-policy",
        lastmod: undefined,
        priority: 0.7,
        changefreq: "daily",
      },
      {
        loc: "/copyright-policy",
        lastmod: undefined,
        priority: 0.7,
        changefreq: "daily",
      }
    );

    return routes;
  } catch (error) {
    console.error("Error fetching public routes:", error);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { routes } = await getAllPublicRoutesFn();
    return res.status(200).json({
      routes,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
