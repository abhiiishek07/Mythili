import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoMailUnreadOutline } from "react-icons/io5";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col overflow-hidden h-screen justify-center bg-white">
        <main className="grow overflow-y-auto relative">
          <Header />
          {children}
          <Footer />
        </main>
        <button className="btn btn-circle hidden md:absolute right-4 md:right-8 lg:right-16 top-[50rem] md:top-[38rem] lg:top-[40rem] bg-green-600 hover:bg-green-600 text-white shadow-xl">
          <IoMailUnreadOutline size={25} />
        </button>
      </div>
    </Fragment>
  );
};

export default Layout;
