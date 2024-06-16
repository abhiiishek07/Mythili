import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "react-hot-toast";
import "@/styles/lexical.css";

// Correct import for Lato font from next/font/google
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <ProgressBar
        height="2px"
        color="#15803D"
        options={{ showSpinner: false }}
      />

      <div className={lato.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </ThemeProvider>
  );
}
