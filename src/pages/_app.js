import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      {" "}
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-2LY6VK042Z" />
      <Script id="google-analytics">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-2LY6VK042Z');
  `}
      </Script> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
