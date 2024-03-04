import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col overflow-hidden h-screen justify-center">
        <div className="p-8">
          <Header />
        </div>
        <main className="grow overflow-y-auto">
          {children}
          <Footer />
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
