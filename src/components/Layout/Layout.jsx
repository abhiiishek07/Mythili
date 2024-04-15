import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { IoMailUnreadOutline } from "react-icons/io5";
import ContactUsModal from "../ContactUsModal/ContactUsModal";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [openContactus, setOpenContactUs] = useState(false);
  const router = useRouter();

  return (
    <Fragment>
      <div className={` ${openContactus && "blur-md"}`}>
        {router.pathname !== "/" && <Header />}
        <main className="relative">
          {children}
          <button
            className="btn btn-circle fixed bottom-4 right-4   bg-green-800 text-white shadow-xl  rounded-full hover:bg-green-800 z-50"
            onClick={() => setOpenContactUs(true)}
          >
            <IoMailUnreadOutline size={25} />
          </button>
        </main>
        <Footer />
      </div>

      <ContactUsModal
        openContactUs={openContactus}
        setOpenContactUs={setOpenContactUs}
      />
    </Fragment>
  );
};

export default Layout;
