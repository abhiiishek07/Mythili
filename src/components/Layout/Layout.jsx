import { Fragment, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoMailUnreadOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";
import ContactUsModal from "../ContactUsModal/ContactUsModal";

const Layout = ({ children }) => {
  const [openContactus, setOpenContactUs] = useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <div
        className={`flex flex-col overflow-hidden h-screen justify-center bg-white ${
          openContactus && "blur-md"
        }`}
      >
        <main className="flex-1 overflow-y-auto relative">
          {router.pathname === "/" && <AnnouncementBar />}
          <Header />
          {children}
          <Footer />
        </main>
        <button
          className="hidden  lg:btn lg:btn-circle absolute right-4 md:right-8 lg:right-28 top-[50rem] md:top-[38rem] lg:top-[40rem] md:bg-green-600 hover:bg-green-600 md:text-white md:shadow-xl"
          onClick={() => setOpenContactUs(true)}
        >
          <IoMailUnreadOutline size={25} />
        </button>
      </div>
      <ContactUsModal
        openContactUs={openContactus}
        setOpenContactUs={setOpenContactUs}
      />
    </Fragment>
  );
};

export default Layout;
