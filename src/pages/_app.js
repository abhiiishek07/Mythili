import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "react-hot-toast";
import "@/styles/lexical.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <ProgressBar
        height="2px"
        color="#15803D"
        options={{ showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="bottom-center" reverseOrder={false} />
    </ThemeProvider>
  );
}
